// Importing necessary modules
import { HfInference } from "@huggingface/inference";

// Define a system prompt for the AI assistant
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe.
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
Make sure to provide a clear and concise recipe that the user can follow easily.
Make sure to provide all the necessary details for the recipe, including the ingredients, the steps, and any additional notes.
Format your response in markdown to make it easier to render to a web page
`;

// Debugging: Log the Hugging Face access token from environment variables
// console.log(
//   "Hugging Face Access Token:",
//   import.meta.env.VITE_HF_ACCESS_TOKEN
// );

// Initialize the Hugging Face Inference client with the access token from environment variables
const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

// Function to get a recipe suggestion from the Mistral model
export async function getRecipeFromMistral(ingredientsArr) {
  // Join the ingredients array into a single string
  const ingredientsString = ingredientsArr.join(", ");
  try {
    // Make a request to the Hugging Face API for a chat completion
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    // Return the content of the first choice from the response
    return response.choices[0].message.content;
  } catch (err) {
    // Log any errors that occur during the API request
    if (err.response && err.response.status === 429) {
      console.error("Rate limit exceeded. Retrying after delay...");
      await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait for 60 seconds
      return getRecipeFromMistral(ingredientsArr); // Retry the request
    } else {
      console.error(err.message);
    }
  }
}

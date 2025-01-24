import { useState } from "react";
import IngredientsList from "./IngredientsList";
import LlamaRecipe from "./LlamaRecipe";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

    e.currentTarget.reset();
  };

  const toggleRecipeShown = () => {
    setRecipeShown(true);
  };

  return (
    <main className="flex flex-col items-center w-screen h-screen py-14 text-llama-creme">
      {/* Form to add ingredients */}
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          className="py-2 px-5 rounded-lg bg-llama-white text-llama-gray"
        />
        <button
          className="py-2 px-5 bg-llama-black text-llama-white 
          p-2 rounded-lg drop-shadow-md hover:bg-llama-black/60 
          delay-75 transition ease-in-out duration-300"
        >
          + Add ingredient
        </button>
      </form>

      {/* Ingredients list section */}
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}

      {/* Recipe section */}
      {recipeShown && <LlamaRecipe />}
    </main>
  );
};

export default Main;

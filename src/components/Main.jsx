import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

    e.currentTarget.reset();
  };

  return (
    <main
      className="flex flex-col items-center w-screen h-screen py-14
    bg-llama-gray text-llama-creme"
    >
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

      <ul>
        {ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
    </main>
  );
};

export default Main;

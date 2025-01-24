const IngredientsList = ({ ingredients, toggleRecipeShown }) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold mt-8">Ingredients on hand:</h2>

      <ul className="list-disc pl-8">
        {ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>

      {/* Get recipe box */}
      {ingredients.length > 4 && (
        <div className="flex gap-10 py-8 px-5 bg-llama-creme text-llama-gray rounded-lg mt-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <div className="flex items-center">
            <button
              className="py-2  px-5 bg-llama-orange text-llama-white
          p-2 rounded-lg drop-shadow-md hover:bg-llama-black/60 
          delay-75 transition ease-in-out duration-300"
              onClick={toggleRecipeShown}
            >
              Get a recipe
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;

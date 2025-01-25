import Markdown from "react-markdown";

const LlamaRecipe = ({ recipe }) => {
  return (
    <section className="container px-14 py-10" aria-live="polite">
      <h2 className="text-3xl font-bold mb-5">Chef Llama Recommends:</h2>
      <Markdown className={"flex flex-col gap-5 text-lg"}>{recipe}</Markdown>
    </section>
  );
};

export default LlamaRecipe;

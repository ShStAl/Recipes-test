import { useParams } from "react-router-dom";

export default function SingleRecipe() {
  const { recipeId } = useParams();

  return (
    <>
      <div>SingleRecipe {recipeId}</div>
      <div></div>
    </>
  );
}

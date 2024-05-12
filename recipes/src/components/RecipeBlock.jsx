import { Link } from "react-router-dom";
import CookingTimeSVG from "./svg/CookingTimeSVG";
import DifficultyStarEmptySVG from "./svg/DifficultyStarEmptySVG";
import DifficultyStarFilledSVG from "./svg/DifficultyStarFilledSVG";

export default function RecipeBlock({ recipe }) {
  const { id, name, image, cookTimeMinutes, difficulty, cuisine, mealType } =
    recipe;
  return (
    <div className="grid max-h-96 grid-cols-2 border-[1px] border-[#F0F0F0]">
      <div className="flex flex-col">
        <Link to={`recipe/${recipe.id}`}>
          <div className="flex h-16 items-center border-b-[1px] border-[#F0F0F0] bg-white px-6 py-4 text-base font-medium leading-4">
            {name}
          </div>
        </Link>
        <div className="flex-grow">
          <Link to={`recipe/${recipe.id}`}>
            <img
              className="h-full object-cover"
              src={image}
              alt="/No-Image-Placeholder.svg.png"
            ></img>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-white p-6">
        <div className="mt-16 flex items-center gap-2">
          <CookingTimeSVG />
          <p className="text-xs font-normal leading-6">{`${cookTimeMinutes} min`}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs font-normal leading-6">Difficult:</p>
          <div className="flex gap-[6px]">
            <DifficultyStarFilledSVG />
            {difficulty === "Medium" ? (
              <DifficultyStarFilledSVG />
            ) : (
              <DifficultyStarEmptySVG />
            )}
            {difficulty === "Hard" ? (
              <DifficultyStarFilledSVG />
            ) : (
              <DifficultyStarEmptySVG />
            )}
          </div>
        </div>
        <p className="text-xs font-normal leading-6">{`${cuisine} cuisine`}</p>
        <p className="text-xs font-normal leading-6">{`${mealType.join(", ")}`}</p>
      </div>
    </div>
  );
}

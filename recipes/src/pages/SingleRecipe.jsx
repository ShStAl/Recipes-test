import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleRecipe } from "../redux/singleRecipe/SingleRecipeSlice";
import { useEffect } from "react";

export default function SingleRecipe() {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.singleRecipe.recipe);

  useEffect(() => {
    dispatch(fetchSingleRecipe(recipeId));
  }, []);

  return (
    <>
      <div className="flex h-[72px] w-full items-center gap-3 bg-white px-6 py-4">
        <Link to={`/`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <h1 className="text-2xl font-medium leading-7">{recipe.name}</h1>
      </div>

      <div className="mt-3 grid w-full flex-grow grid-cols-4 gap-3">
        <div className="grid h-full grid-rows-6 gap-2">
          <div className="divide-y-[1px] bg-white">
            <div className="w-full px-6 py-4 text-base font-medium">Кухня</div>
            <div className="flex w-full items-center p-6 text-base font-normal">
              {recipe.cuisine}
            </div>
          </div>
          <div className="divide-y-[1px] bg-white">
            <div className="w-full px-6 py-4 text-base font-medium">Теги</div>
            <div className="flex w-full items-center p-6 text-base font-normal">
              Европейская
            </div>
          </div>
          <div className="divide-y-[1px] bg-white">
            <div className="w-full px-6 py-4 text-base font-medium">
              Калорийность
            </div>
            <div className="flex w-full items-center p-6 text-base font-normal">
              Европейская
            </div>
          </div>
          <div className="divide-y-[1px] bg-white">
            <div className="w-full px-6 py-4 text-base font-medium">
              Количество порций
            </div>
            <div className="flex w-full items-center p-6 text-base font-normal">
              {recipe.servings}
            </div>
          </div>
          <div className="row-span-2 divide-y-[1px] bg-white">
            <div className="w-full px-6 py-4 text-base font-medium">
              Описание
            </div>
            <div className="flex w-full items-center p-6 text-base font-normal">
              Европейская
            </div>
          </div>
        </div>

        <div className="grid h-full grid-rows-6 gap-2">
          <div className="divide-y-[1px] bg-white">
            <div className="w-full px-6 py-4 text-base font-medium">
              Общее время приготовления
            </div>
            <div className="flex w-full items-center p-6 text-base font-normal">
              30 минут
            </div>
          </div>
          <div className="row-span-5 divide-y-[1px] bg-white">
            <div className="flex w-full px-6 py-4 text-base font-medium">
              Инструкция по приготовлению
            </div>
            <div className="flex w-full items-center p-6 text-base font-normal">
              Европейская
            </div>
          </div>
        </div>
        <div className="col-span-2 h-full  bg-[#F7F7F7]">
          <img
            className="h-96 object-center"
            src="/No-Image-Placeholder.svg.png"
          ></img>
        </div>
      </div>
    </>
  );
}

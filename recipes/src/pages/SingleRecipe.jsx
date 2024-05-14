import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleRecipe } from "../redux/singleRecipe/SingleRecipeSlice";
import { useEffect } from "react";
import SingleRecipePagination from "../components/SingleRecipePagination";

export default function SingleRecipe() {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const { recipe, status } = useSelector((state) => state.singleRecipe);

  useEffect(() => {
    dispatch(fetchSingleRecipe(recipeId));
  }, []);

  return (
    <>
      <div className="flex h-[72px] w-full items-center justify-between bg-white px-6 py-4">
        <div className="flex items-center gap-3">
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
        <SingleRecipePagination />
      </div>

      <div className="mt-3 grid h-[calc(100%-72px)] w-full grid-cols-4 gap-3">
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
              {status === "success"
                ? recipe.tags.map((e) => "#" + e).join(" ")
                : undefined}
            </div>
          </div>
          <div className="divide-y-[1px] bg-white">
            <div className="w-full px-6 py-4 text-base font-medium">
              Калорийность
            </div>
            <div className="flex w-full items-center p-6 text-base font-normal">
              {`${recipe.caloriesPerServing} калорий`}
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
              Ингредиенты
            </div>
            <div className="flex w-full flex-col p-6 text-sm font-normal">
              {status === "success"
                ? recipe.ingredients.map((line, i) => <p key={i}>{line}</p>)
                : undefined}
            </div>
          </div>
        </div>

        <div className="grid h-full grid-rows-6 gap-2">
          <div className="divide-y-[1px] bg-white">
            <div className="w-full px-6 py-4 text-base font-medium">
              Общее время приготовления
            </div>
            <div className="flex w-full items-center p-6 text-base font-normal">
              {`${recipe.prepTimeMinutes + recipe.cookTimeMinutes} минут`}
            </div>
          </div>
          <div className="row-span-5 divide-y-[1px] bg-white">
            <div className="flex w-full px-6 py-4 text-base font-medium">
              Инструкция по приготовлению
            </div>
            <div className="justify-center-center flex w-full flex-col p-6 text-base font-normal">
              {status === "success"
                ? recipe.instructions.map((line, i) => (
                    <div key={i} className="relative border-l-2 p-4">
                      <svg
                        className="absolute -left-1.5 translate-y-1.5 transform"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.5C1 3.29086 2.79086 1.5 5 1.5C7.20914 1.5 9 3.29086 9 5.5C9 7.70914 7.20914 9.5 5 9.5C2.79086 9.5 1 7.70914 1 5.5Z"
                          fill="white"
                          stroke="#1890FF"
                          strokeWidth="2"
                        />
                      </svg>

                      {line}
                    </div>
                  ))
                : undefined}
            </div>
          </div>
        </div>
        <div className="col-span-2 flex h-full flex-col overflow-hidden bg-[#F7F7F7]">
          <img
            className="object-fit"
            src={recipe.image}
            alt="/No-Image-Placeholder.svg.png"
          ></img>
        </div>
      </div>
    </>
  );
}

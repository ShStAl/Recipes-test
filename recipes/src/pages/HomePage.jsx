import { Link } from "react-router-dom";
import RecipeBlock from "../components/RecipeBlock";
import CuisineSelector from "../components/CuisineSelector";
import DishTypeSelector from "../components/DishTypeSelector";
import DifficultySelector from "../components/DifficultySelector";
import { useSelector, useDispatch } from "react-redux";
import { setDefault } from "../redux/filter/FilterSlice";
import { useEffect } from "react";
import { fetchRecipes } from "../redux/recipes/RecipesSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const onClearFilters = () => {
    dispatch(setDefault());
  };

  return (
    <>
      <div className="flex h-[72px] w-full items-center bg-white px-6 py-4">
        <h1 className="text-2xl font-medium leading-7">
          Сборник рецептов из разных стран мира
        </h1>
      </div>

      <div className="mt-3 grid w-full flex-grow grid-cols-4">
        <div className="flex h-full flex-col gap-6 bg-white p-6">
          <div className="flex flex-col gap-6 p-6">
            <img
              className="h-40 rounded-sm object-cover"
              src="/Cuisine.jpeg"
            ></img>
            <div className="flex flex-col gap-6">
              <p className="text-sm font-normal leading-[18px]">
                В нашей жизни, когда время становится все более ценным ресурсом,
                задача планирования приема пищи становится все более сложной.
              </p>
              <p className="text-sm font-normal leading-[18px]">
                Часто мы сталкиваемся с дилеммой: что приготовить на завтрак,
                обед или ужин? Каким образом мы можем легко и быстро
                определиться с выбором блюда и не тратить много времени на
                принятие этого решения?
              </p>
              <p className="text-sm font-normal leading-[18px]">
                Наш сервис поможет: выбирайте параметры - и вперед!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex w-full items-center justify-end gap-3">
              <p className="text-base font-bold leading-6">Cuisine:</p>
              <CuisineSelector />
            </div>
            <div className="flex w-full items-center justify-end gap-3">
              <p className="text-base font-bold leading-6">Type:</p>
              <DishTypeSelector />
            </div>
            <div className="flex w-full items-center justify-end gap-3 text-right">
              <p className="text-base font-bold leading-6">
                Сложность приготовления:
              </p>
              <DifficultySelector />
            </div>
            <button
              className="self-start text-sm text-[#1990FF]"
              onClick={onClearFilters}
            >
              Clear filters
            </button>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="text-base text-[#808080]">
              А еще можно попробовать на вкус удачу
            </p>
            <button className="border px-4 py-1 text-sm text-[#929292]">
              Мне повезëт!
            </button>
          </div>
        </div>
        <div className="col-span-3 ml-3 mr-[14px] flex h-full flex-col bg-[#F7F7F7]">
          <div className="flex h-14 w-full gap-3 border-b-[1px] border-[#F0F0F0] bg-white px-6 py-4">
            <p className="text-xl font-medium leading-6 ">Найденные рецепты</p>
            <p className="text-sm font-normal leading-[22px] text-[#8C8C8C]">
              288
            </p>
          </div>
          <div className="grid w-full flex-grow grid-cols-3 gap-3 p-3">
            {status === "success"
              ? items.recipes.map((item) => (
                  <RecipeBlock key={item.id} recipe={item} />
                ))
              : undefined}
          </div>
          <div className="flex h-14 w-full items-center justify-center">
            Pagination
          </div>
        </div>
      </div>

      {/* <Link to={`recipe/1`}>Recipe 1</Link> */}
    </>
  );
}

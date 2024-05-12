import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { setDishType } from "../redux/filter/FilterSlice";

const dishTypes = [
  "Any",
  "Appetizer",
  "Beverage",
  "Breakfast",
  "Dessert",
  "Dinner",
  "Lunch",
  "Side Dish",
  "Snack",
];

export default function DishTypeSelector() {
  const dishType = useSelector((state) => state.filter.dishType);
  const dispatch = useDispatch();

  const onChangeDishType = (value) => {
    dispatch(setDishType(value));
  };

  return (
    <>
      <Listbox value={dishType} onChange={onChangeDishType}>
        <ListboxButton className="relative block w-full max-w-72 rounded-sm border border-[#D9D9D9] px-4 py-2 text-left text-sm">
          {dishType}
          <ChevronDownIcon
            className="group pointer-events-none absolute right-2.5 top-2.5 size-4"
            aria-hidden="true"
          />
        </ListboxButton>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            anchor="bottom"
            className="w-[var(--button-width)] rounded-sm border border-[#D9D9D9] bg-white focus:outline-none"
          >
            {dishTypes.map((type) => (
              <ListboxOption
                key={dishTypes.indexOf(type)}
                value={type}
                className="group flex cursor-default items-center gap-2 px-4 py-2 data-[focus]:bg-[#D9D9D9]"
              >
                <div className="text-sm">{type}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </>
  );
}

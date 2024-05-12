import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { setCountry } from "../redux/filter/FilterSlice";

const countries = ["All", "Russia", "Tanya Fox", "Arlene Mccoy", "Devon Webb"];

export default function CountrySelector() {
  const country = useSelector((state) => state.filter.country);
  const dispatch = useDispatch();

  const onChangeCountry = (value) => {
    dispatch(setCountry(value));
  };

  return (
    <>
      <Listbox value={country} onChange={onChangeCountry}>
        <ListboxButton className="relative block w-full max-w-72 rounded-sm border border-[#D9D9D9] px-4 py-2 text-left text-sm">
          {country}

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
            {countries.map((item) => (
              <ListboxOption
                key={countries.indexOf(item)}
                value={item}
                className="group flex cursor-default items-center gap-2 px-4 py-2 data-[focus]:bg-[#D9D9D9]"
              >
                <div className="text-sm">{item}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </>
  );
}

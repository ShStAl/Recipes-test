import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const people = [
  { id: 1, name: "Breakfast" },
  { id: 2, name: "Dinner" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export default function DishTypeSelector() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton className="relative block w-full max-w-72 rounded-sm border border-[#D9D9D9] px-4 py-2 text-left text-sm">
          {selected.name}
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
            {people.map((person) => (
              <ListboxOption
                key={person.name}
                value={person}
                className="group flex cursor-default items-center gap-2 px-4 py-2 data-[focus]:bg-[#D9D9D9]"
              >
                <div className="text-sm">{person.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </>
  );
}

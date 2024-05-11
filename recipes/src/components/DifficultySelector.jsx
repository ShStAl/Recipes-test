import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

const plans = [
  { name: "Любая" },
  { name: "Низкая" },
  { name: "Средняя" },
  { name: "Высокая" },
];

export default function DifficultySelector() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <RadioGroup
      by="name"
      value={selected}
      onChange={setSelected}
      aria-label="Server size"
      className="flex w-full max-w-72 divide-x rounded-sm border border-[#D9D9D9]"
    >
      {plans.map((plan) => (
        <Radio
          key={plan.name}
          value={plan}
          className="flex flex-1 cursor-pointer justify-center py-2 text-sm font-normal transition data-[checked]:bg-[#1990FF] data-[checked]:text-white"
        >
          {plan.name}
        </Radio>
      ))}
    </RadioGroup>
  );
}

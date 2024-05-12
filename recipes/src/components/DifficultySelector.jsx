import { Radio, RadioGroup } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { setDifficulty } from "../redux/filter/FilterSlice";

const difficulties = [
  { name: "Любая", value: 0 },
  { name: "Низкая", value: 1 },
  { name: "Средняя", value: 2 },
  { name: "Высокая", value: 3 },
];

export default function DifficultySelector() {
  const difficulty = useSelector((state) => state.filter.difficulty);
  const dispatch = useDispatch();

  const onChangeDifficulty = (value) => {
    dispatch(setDifficulty(value));
  };

  return (
    <RadioGroup
      value={difficulty}
      onChange={onChangeDifficulty}
      aria-label="Difficulty"
      className="flex w-full max-w-72 divide-x rounded-sm border border-[#D9D9D9]"
    >
      {difficulties.map((level) => (
        <Radio
          key={level.name}
          value={level.value}
          className="flex flex-1 cursor-pointer justify-center py-2 text-sm font-normal transition data-[checked]:bg-[#1990FF] data-[checked]:text-white"
        >
          {level.name}
        </Radio>
      ))}
    </RadioGroup>
  );
}

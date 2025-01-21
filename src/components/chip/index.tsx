import { ReactElement } from "react";
import { ChipProps } from "./types";

const Chip = ({ text }: ChipProps): ReactElement => {
  return (
    <li className="py-1 px-4 bg-sky-100 border border-sky-500 rounded-full">
      <p className="text-sky-400 font-bold text-lg">{text}</p>
    </li>
  );
};

export default Chip;

import { ReactElement } from "react";
import clsx from "clsx";
import Link from "next/link";
import { ButtonProps } from "./types";

const Button = ({
  onClick,
  children,
  className,
  theme = "primary",
  link,
}: ButtonProps): ReactElement => {
  const buttonClass = clsx(
    "py-2 px-4 rounded-md shadow-md font-bold",
    {
      "bg-sky-400 text-white": theme === "primary",
      "bg-white text-black border border-black": theme === "secondary",
    },
    className
  );

  if (link) {
    return (
      <Link href={link} passHref className={buttonClass} target="_blank">
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;

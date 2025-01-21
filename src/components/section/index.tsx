import { ReactElement } from "react";
import { SectionProps } from "./types";
import { NullableReactElement } from "@/typings/util";
import clsx from "clsx";

const Section = ({
  title,
  description,
  children,
  showBorder = true,
}: SectionProps): ReactElement => {
  const renderTitle = (): ReactElement => {
    return (
      <h2 className="text-sky-400 font-bold text-2xl text-center sm:text-left gap-2">
        {title}
      </h2>
    );
  };

  const renderDescription = (): NullableReactElement => {
    if (!description) return null;

    return (
      <p className="text-gray-400 font-bold text-center sm:text-left">
        {description}
      </p>
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center">
      {renderTitle()}
      {renderDescription()}
      <div
        className={clsx(
          "mx-3 w-full flex justify-center items-center max-w-[400px] sm:max-w-[700px] lg:max-w-[1000px]",
          showBorder ? "bg-gray-200 rounded-lg p-2" : ""
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;

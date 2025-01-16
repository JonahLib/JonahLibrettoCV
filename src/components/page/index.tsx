import { ReactElement } from "react";
import { PageProps } from "./types";
import { NullableReactElement } from "@/typings/util";

const Page = ({ title, description, children }: PageProps) => {
  const renderTitle = (): ReactElement => {
    return <h1 className="font-bold text-4xl text-black mt-2">{title}</h1>;
  };

  const renderDecription = (): NullableReactElement => {
    return <p className="font-bold mt-1">{description}</p>;
  };

  return (
    <div className=" w-full flex flex-col items-center pt-2">
      {renderTitle()}
      {renderDecription()}
      {children}
    </div>
  );
};

export default Page;

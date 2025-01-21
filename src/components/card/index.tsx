"use client";

import Image from "next/image";

import { ReactElement } from "react";
import { NullableReactElement } from "@/typings/util";
import Button from "../button";
import { CardProps } from "@/typings/card";

const Card = ({ title, description, siteLink, gitLink, photo }: CardProps) => {
  const renderImage = (): ReactElement => {
    return (
      <div className="bg-gray-100 rounded-t-lg ">
        <Image
          src={photo}
          alt="nav-icon"
          className="mx-auto"
          width={150}
          height={150}
        />
      </div>
    );
  };

  const renderTitle = (): ReactElement => {
    return (
      <h1 className="font-bold text-3xl text-black pl-2 text-center">
        {title}
      </h1>
    );
  };

  const renderDecription = (): NullableReactElement => {
    if (!description) return null;

    return (
      <p className="pl-2 text-black text-center text-wrap">{description}</p>
    );
  };

  const renderWebProjectLink = () => {
    return (
      <Button link={siteLink} className="flex gap-2">
        <Image src="website.svg" alt="nav-icon" width={24} height={24} />
        <h1>View Website</h1>
      </Button>
    );
  };

  const renderGitHubLink = () => {
    return (
      <Button link={gitLink} className="flex gap-2" theme="secondary">
        <Image src="git_hub.svg" alt="nav-icon" width={24} height={24} />
        <h1>View Code</h1>
      </Button>
    );
  };

  return (
    <div className="bg-white w-full h-80 rounded-lg shadow-lg flex flex-col max-w-[400px] sm:max-w-[400px] lg:max-w-[500px]">
      {renderImage()}
      {renderTitle()}
      {renderDecription()}
      <div className="flex  justify-around items-center mt-4">
        {renderWebProjectLink()}
        {renderGitHubLink()}
      </div>
    </div>
  );
};

export default Card;

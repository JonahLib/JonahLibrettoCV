import Card from "@/components/card";
import Page from "@/components/page";
import { PROJECTS } from "@/constants/projects";
import { ReactElement } from "react";

export default function Home() {
  const renderCards = (): ReactElement[] => {
    return PROJECTS.map((project, index) => {
      return (
        <li key={index} className="w-full sm:w-auto">
          <Card
            photo={project.photo}
            gitLink={project.gitLink}
            siteLink={project.siteLink}
            title={project.title}
            description={project.description}
          />
        </li>
      );
    });
  };
  return (
    <Page
      title="Jonah Libretto"
      description="Please browes throught my personal projects!"
    >
      <ul className="px-4 flex flex-col gap-5 mt-2 sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 overflow-x-auto">
        {renderCards()}
      </ul>
    </Page>
  );
}

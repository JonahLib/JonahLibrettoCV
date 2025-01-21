import Card from "@/components/card";
import Chip from "@/components/chip";
import Section from "@/components/section";
import { PROJECTS, SKILLS, SOFT_SKILLS } from "@/constants/projects";
import { ReactElement } from "react";

export default function Home() {
  const renderCards = (): ReactElement[] => {
    return PROJECTS.map((project, index) => {
      return (
        <li key={index} className="w-full flex justify-center items-center">
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

  const renderProjectsSection = (): ReactElement => {
    return (
      <Section
        title="Personal Projects"
        description="Please browse through my personal projects!"
        showBorder={false}
      >
        <ul className="flex flex-col sm:flex-row gap-6 sm:gap-6 w-full items-center justify-center sm:max-w-[700px]">
          {renderCards()}
        </ul>
      </Section>
    );
  };

  const renderExperinceSection = () => {
    return (
      <Section title="Experience">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-lg">
              PION (formerly StudentBeans) &mdash; Junior Javascript Engineer
            </h2>
            <p className="font-bold text-sm pb-4">Dec 2023 - Present</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>
                Played a key role in the development of a high-impact B2B
                greenfield project, achieving 150% of sales pipeline target.
              </li>
              <li>
                Contributed to the successful migration of legacy CMS from a
                monolithic architecture to a scalable, TypeScript-based
                microservices framework.
              </li>
              <li>
                Collaborated with cross-functional teams in an Agile environment
                to drive project delivery and continuous improvement.
              </li>
              <li>
                Ensured 100% unit test coverage across multiple projects,
                maintaining high code quality and reliability.
              </li>
              <li>
                Improved the performance and scalability of key UI components by
                creating reusable elements, aligning with our design system.
              </li>
              <li>
                Participated in daily code reviews to uphold guild standards,
                ensuring high-quality code and driving continuous improvement
                within the team.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg">
              PION (formerly StudentBeans) &mdash; Apprentice Javascript
              Engineer
            </h2>
            <p className="font-bold text-sm pb-4">Jan 2021 - Dec 2023</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>
                Supported the maintenance and enhancement of the CMS system by
                adding new features and improving existing functionality.
              </li>
              <li>
                Worked within an Agile squad, refining tasks and collaborating
                with team members to meet sprint goals and deadlines.
              </li>
              <li>
                Actively engaged in guild activities to learn best practices and
                contribute to improving team standards.
              </li>
              <li>
                Assisted in debugging, troubleshooting, and refining code to
                ensure smooth deployment and high-quality output.
              </li>
            </ul>
          </div>
        </div>
      </Section>
    );
  };

  const renderEducationSection = (): ReactElement => {
    return (
      <Section title="Education" showBorder={false}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-gray-200 rounded-xl p-2 w-full">
            <h2 className="font-bold text-lg">
              Software Developer Level 4 &mdash; Distinction
            </h2>
            <p className="font-bold text-sm pb-4">Jan 2021 - Oct 2023</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Documented my learning.</li>
              <li>
                Worked with a coach to learn basic web development skills.
              </li>
              <li>Learned how to be part of an agile team.</li>
            </ul>
          </div>
          <div className="bg-gray-200 rounded-xl p-2 w-full">
            <h2 className="font-bold text-lg">Queen Elizabeths High School</h2>
            <p className="font-bold text-sm pb-4">Jan 2016 - Feb 2020</p>
          </div>
        </div>
      </Section>
    );
  };

  const renderSkill = (): ReactElement => {
    return (
      <Section showBorder={false} title="Skills">
        <ul className="w-full flex flex-wrap gap-2 max-w-[750px]">
          {SKILLS.map((skill) => (
            <Chip key={skill} text={skill} />
          ))}
        </ul>
      </Section>
    );
  };

  const renderSoftSkill = (): ReactElement => {
    return (
      <Section showBorder={false} title="Soft Skills">
        <ul className="w-full flex flex-wrap gap-2 max-w-[750px]">
          {SOFT_SKILLS.map((skill) => (
            <Chip key={skill} text={skill} />
          ))}
        </ul>
      </Section>
    );
  };

  return (
    <div className=" w-full flex flex-col justify-center items-center pt-2 m-auto gap-6 mb-6">
      {renderProjectsSection()}
      {renderExperinceSection()}
      {renderEducationSection()}
      {renderSkill()}
      {renderSoftSkill()}
    </div>
  );
}

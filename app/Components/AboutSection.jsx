"use client";
import TabButton from "./TabButton";
import React, { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Javascript</li>
        <li>Python</li>
        <li>React.Js</li>
        <li>TailwindCSS</li>
        <li>MySQL</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Lovely Professional University</li>
        <li>Ishan Internatonal Public School</li>
        <li>Don Bosco Academy</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Structures and Algorithm - Cipherschool </li>
        <li>Front end Web development - Board infinity</li>
        <li>Cloud Computing on AWS - Udemy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/pc.png"
          alt="Dream Setup"
          width="auto"
          height="auto"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an aspiring software engineer with a strong proficiency in Java
            and JavaScript, showcasing a dedicated commitment to meticulous
            problem-solving. My passion for coding is matched by a relentless
            pursuit of excellence in crafting effective and efficient solutions.
            I thrive in dynamic development environments, where challenges are
            met with enthusiasm, and adaptability is key. Focused on continuous
            learning, I am eager to contribute my skills to meaningful projects
            and collaborate with innovative teams. I am now seeking
            opportunities that not only allow me to apply my technical expertise
            but also foster my professional growth in the ever-evolving
            landscape of software development.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certifications")}
              active={tab === "Certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || (
              <p>No content available for the selected tab.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

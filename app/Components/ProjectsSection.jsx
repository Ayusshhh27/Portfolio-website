import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS featuring a clean and modern design with a dynamic layout.",
    image: "/images/projects/a.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ayusshhh27/Portfolio-website",
    previewUrl: "https://ayush-chandra.vercel.app/",
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    description:
      "The Sorting Visualizer animates sorting algorithms with dynamic bars, creating a captivating visual representation.",
    image: "/images/projects/b.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ayusshhh27/Sorting-Algorithm-Visualizer",
    previewUrl: "https://sorting-visualizer27.netlify.app",
  },
  {
    id: 3,
    title: "CRUD Application",
    description:
      "Designed and implemented a Spring Boot CRUD application, incorporating Spring Security, Thymeleaf, and MySQL.",
    image: "/images/projects/c.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ayusshhh27/EmployEase-CRUD-application",
    previewUrl: "https://github.com/Ayusshhh27/EmployEase-CRUD-application",
  },
  {
    id: 4,
    title: "Currency Converter",
    description:
      "Instantly convert currencies with our user-friendly tool. Make quick calculations for international transactions or travel. Simple and efficient!",
    image: "/images/projects/d.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ayusshhh27/Currency-Converter",
    previewUrl: "https://currencyconverter9.netlify.app/",
  },
  {
    id: 5,
    title: "Qr-code generator",
    description:
      "Developed a dynamic QR code generator using HTML, CSS, and JavaScript, showcasing strong front-end skills.",
    image: "/images/projects/e.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ayusshhh27/Qrcode-Generator",
    previewUrl: "https://qrcodegenerator27.netlify.app/",
  },
  {
    id: 6,
    title: "2048 Game",
    description:
      "Created an engaging 2048 game using JavaScript, CSS grids, and animations for a seamless and visually appealing user experience",
    image: "/images/projects/f.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ayusshhh27/Qrcode-Generator",
    previewUrl: "https://github.com/Ayusshhh27/2048-game",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-extrabold mt-4 mb-8 md:mb-12 bg-gradient-to-r from-primary-400 to-secondary-300 text-transparent bg-clip-text">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <div key={project.id} className="flex-grow">
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

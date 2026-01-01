import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      name: "PuratonBazar.com",
      image: "https://i.ibb.co.com/twK5r2jG/Screenshot-2026-01-01-151737.png",
      description:
        "Full stack E-commerce Website  with admin dashboard, JWT authentication and payment integration.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      liveLink: "https://puratonbazar.netlify.app",
      frontendRepo: "https://github.com/Animes101/puraton-bazar-bd-client",
      backendRepo: "https://github.com/Animes101/puraton-bazar-bd-server",
    },
    {
      name: "Portfolio Website",
      image: "https://i.ibb.co.com/Rprgs108/Screenshot-2026-01-01-152121.png",
      description:
        "Personal portfolio website showcasing projects, skills and contact information.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://yourportfolio.com",
      frontendRepo: "https://github.com/yourname/portfolio",
      backendRepo: "",
    },
  ];

  return (
    <section className="bg-backgroundDark h-screen py-20">
      <div className="container mx-auto">
         <h1 className="text-4xl font-bold text-buttonBankground dark:text-textColor mb-4 text-center">
          My Project
        </h1>

        <hr className="border-t-2 border-buttonBankground w-full mb-12 animate-grow" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;

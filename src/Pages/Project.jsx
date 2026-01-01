import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      name: "Restaurant Management System",
      image: "https://i.ibb.co/5j0d7vF/restaurant.png",
      description:
        "Full stack restaurant management system with admin dashboard, JWT authentication and payment integration.",
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
      name: "E-commerce Website",
      image: "https://i.ibb.co/jr4M8n3/ecommerce.png",
      description:
        "MERN stack e-commerce website with user roles, cart system and secure checkout.",
      technologies: [
        "React",
        "Tailwind",
        "Firebase",
        "Node",
        "MongoDB",
      ],
      liveLink: "https://ecommerce-live.com",
      frontendRepo: "https://github.com/yourname/ecommerce-frontend",
      backendRepo: "https://github.com/yourname/ecommerce-backend",
    },
    {
      name: "Portfolio Website",
      image: "https://i.ibb.co/xh9j2cR/portfolio.png",
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

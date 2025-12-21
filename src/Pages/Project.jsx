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
      liveLink: "https://restaurant-live-site.com",
      frontendRepo: "https://github.com/yourname/restaurant-frontend",
      backendRepo: "https://github.com/yourname/restaurant-backend",
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
    <section className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

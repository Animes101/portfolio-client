import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    name: "PuratonBazar.com",
    type: "fullstack",
    image: "https://i.ibb.co.com/twK5r2jG/Screenshot-2026-01-01-151737.png",
    description:
      "Full stack E-commerce Website with admin dashboard, JWT authentication and payment integration.",
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
    type: "frontend",
    image: "https://i.ibb.co.com/Rprgs108/Screenshot-2026-01-01-152121.png",
    description:
      "Personal portfolio website showcasing projects, skills and contact information.",
    technologies: ["React", "Tailwind CSS"],
    liveLink: "https://yourportfolio.com",
    frontendRepo: "https://github.com/yourname/portfolio",
    backendRepo: "",
  },
];

const Projects = () => {
  // 🔥 default = all
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  return (
    <section className="bg-backgroundDark py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-buttonBankground mb-6 text-center">
          My Projects
        </h1>

        {/* 🔥 daisyUI Tabs */}
        <div className="flex justify-center mb-10">
          <div className="tabs tabs-boxed">
            <a
              className={`tab ${activeTab === "all" && "tab-active"}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </a>

            <a
              className={`tab ${activeTab === "frontend" && "tab-active"}`}
              onClick={() => setActiveTab("frontend")}
            >
              Frontend
            </a>

            <a
              className={`tab ${activeTab === "backend" && "tab-active"}`}
              onClick={() => setActiveTab("backend")}
            >
              Backend
            </a>

            <a
              className={`tab ${activeTab === "fullstack" && "tab-active"}`}
              onClick={() => setActiveTab("fullstack")}
            >
              Full Stack
            </a>
          </div>
        </div>

        {/* 🔥 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400">
              No projects found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

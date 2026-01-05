import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    name: "PuratonBazar.com",
    type: "fullstack",
    image: "https://i.ibb.co.com/twK5r2jG/Screenshot-2026-01-01-151737.png",
    description:
      "Full stack E-commerce Website with admin dashboard, JWT authentication and payment integration.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
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
    liveLink: "https://animes-portfolio.netlify.app",
    frontendRepo: "https://github.com/Animes101/portfolio-client",
    backendRepo: "",
  },
];

const tabs = ["all", "frontend", "backend", "fullstack"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <section className="bg-backgroundDark py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-buttonBankground mb-6 text-center">
          My Projects
        </h1>
        <hr className="border-t-2 border-buttonBankground dark:border-textColor mb-10 w-full" />

        {/* ✅ Tabs (same as old working style) */}
        <div
          role="tablist"
          className="tabs tabs-lift mb-10 flex flex-wrap gap-2 justify-center"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              onClick={() => setActiveTab(tab)}
              className={`${activeTab === tab ? "tab-active text-buttonBankground dark:text-textColor bg-backgroundDark border-buttonBankground dark:border-buttonTextColor " : "bg-backgroundBg dark:bg-backgroundDark border-textColor"} border-t-2 border-r-2 border-l-2 p-2 rounded-md`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No projects found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

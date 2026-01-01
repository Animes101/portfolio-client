import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const {
    name,
    image,
    description,
    technologies,
    liveLink,
    frontendRepo,
    backendRepo,
  } = project;

  return (
    <div className="bg-backgroundDark rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden ">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-semibold mb-2 text-buttonBankground">{name}</h3>

        <p className="text-buttonTextColor text-sm mb-4">
          {description}
        </p>

        {/* Technology */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-buttonBankground cursor-pointer border text-gray-700 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-buttonBankground hover:underline"
          >
            <FaExternalLinkAlt /> Live
          </a>

          <a
            href={frontendRepo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-buttonBankground hover:underline"
          >
            <FaGithub /> Frontend
          </a>

          {backendRepo && (
            <a
              href={backendRepo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-buttonBankground hover:underline"
            >
              <FaGithub /> Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

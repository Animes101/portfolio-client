import React from "react";
import profileImg from "../assets/logo/logo.png.png"; // profile image path

const AboutPage = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
      
      {/* Full Width Horizontal Line */}
      <hr className="border-t-2 border-blue-500 mb-10 w-full" />

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-lg">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio / Intro */}
        <div className="flex-1 space-y-4">
          <p className="text-lg">
            Hello! I'm <span className="font-bold">Your Name</span>, a passionate
            web developer with expertise in frontend and backend development.
            I love building responsive, user-friendly websites and applications
            using modern technologies.
          </p>

          <p className="text-lg">
            I specialize in React, Node.js, Express, MongoDB, Tailwind CSS, and
            more. I also enjoy exploring AI tools, Firebase, and new technologies
            to enhance my projects.
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Expertise:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Responsive Web Design</li>
              <li>Frontend Development with React & Tailwind CSS</li>
              <li>Backend Development with Node.js, Express & MongoDB</li>
              <li>Firebase Integration & Hosting</li>
              <li>Version Control with Git & GitHub</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="/path-to-your-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

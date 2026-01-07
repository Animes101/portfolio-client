
import profileImg from "../assets/logo/logo.png.png"; 

import cv from '../assets/logo/cv.pdf'

const AboutPage = () => {
  return (
    <div className="py-20 px-4 min-h-screen bg-backgroundDark text-textColor">
      <div className="container mx-auto">

        {/* Title */}
        <h1
          data-aos="fade-down"
          className="text-4xl font-bold mb-4 text-center text-buttonBankground dark:text-textColor"
        >
          About Me
        </h1>

        {/* Line */}
        <hr
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mb-14 md:mb-32 border-buttonBankground w-full"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 h-full">

          {/* Profile Image */}
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-lg"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover bg-buttonBankground dark:bg-backgroundBg"
            />
          </div>

          {/* Bio / Intro */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="flex-1 space-y-4"
          >
            <p className="text-lg">
              Hello! I'm <span className="font-bold text-buttonBankground">Animes Barman</span>, a passionate
              web developer with expertise in frontend and backend development.
              I love building responsive, user-friendly websites and applications
              using modern technologies.
            </p>

            <p className="text-lg">
              I specialize in React, Node.js, Express, MongoDB, Tailwind CSS, and
              more. I also enjoy exploring AI tools, Firebase, and new technologies
              to enhance my projects.
            </p>

            {/* Expertise */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="mt-4"
            >
              <h3 className="text-xl font-semibold mb-2">Expertise:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Responsive Web Design</li>
                <li>Frontend Development with React & Tailwind CSS</li>
                <li>Backend Development with Node.js, Express & MongoDB</li>
                <li>Firebase Integration & Hosting</li>
                <li>Version Control with Git & GitHub</li>
              </ul>
            </div>

            {/* Button */}
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="mt-6"
            >
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-buttonBankground text-buttonTextColor dark:bg-textColor hover:shadow-md hover:shadow-buttonBankground"
              >
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

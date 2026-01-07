
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const ProjectCard = ({ project }) => {
//   const {
//     name,
//     image,
//     description,
//     technologies,
//     liveLink,
//     frontendRepo,
//     backendRepo,
//   } = project;

//   return (
//     <div className="bg-backgroundDark h-[500px] rounded-2xl shadow-md hover:shadow-2xl shadow-buttonBankground transition duration-300 overflow-hidden flex flex-col">
//       {/* Image */}
//       <img
//         src={image}
//         alt={name}
//         className="w-full transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[60%]"
//       />

//       {/* Content */}
//       <div className="p-5 flex flex-col flex-1">
//         <h3 className="text-2xl font-semibold mb-2 text-buttonBankground">
//           {name}
//         </h3>

//         <p className="text-buttonTextColor text-sm mb-4 line-clamp-3">
//           {description}
//         </p>

//         {/* Technology */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {technologies.map((tech, index) => (
//             <span
//               key={index}
//               className="bg-buttonBankground cursor-pointer border text-gray-700 px-3 py-1 rounded-full text-xs"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* Links */}
//         <div className="flex flex-wrap gap-4 mt-auto">
//           <a
//             href={liveLink}
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center gap-1 text-buttonBankground hover:underline"
//           >
//             <FaExternalLinkAlt /> Live
//           </a>

//           <a
//             href={frontendRepo}
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center gap-1 text-buttonBankground hover:underline"
//           >
//             <FaGithub /> Frontend
//           </a>

//           {backendRepo && (
//             <a
//               href={backendRepo}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-1 text-buttonBankground hover:underline"
//             >
//               <FaGithub /> Backend
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;



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
    // ১. মেইন ডিভ-এ 'group' ক্লাস অ্যাড করা হয়েছে
    <div className="group bg-backgroundDark h-[500px] cursor-pointer rounded-2xl shadow-md hover:shadow-2xl shadow-buttonBankground transition duration-300 overflow-hidden flex flex-col">
      
      {/* ২. ইমেজ কন্টেইনার ফিক্স করা হয়েছে */}
      <div className="h-64 overflow-hidden w-full"> 
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover object-top transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[calc(100%-256px)]"
        />
        {/* এখানে ২৫৬ পিক্সেল হলো h-64 এর হাইট। এতে ইমেজ একদম শেষ পর্যন্ত স্ক্রল হবে */}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold mb-2 text-buttonBankground underline dark:text-textColor">
          {name}
        </h3>

        <p className="text-textColor text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technology */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-buttonBankground cursor-pointer border text-gray-700 px-3 py-1 rounded-full text-xs dark:bg-textColor"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-buttonBankground hover:underline dark:text-textColor"
          >
            <FaExternalLinkAlt /> Live
          </a>

          <a
            href={frontendRepo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-buttonBankground hover:underline dark:text-textColor"
          >
            <FaGithub /> Frontend
          </a>

          {backendRepo && (
            <a
              href={backendRepo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-buttonBankground hover:underline dark:text-textColor"
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
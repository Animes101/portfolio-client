// import { useState } from "react";
// import useFetch from "../hooks/useFetch";

// const Skill = () => {
//   const { data } = useFetch("skill.json");
  
//   const [activeTab, setActiveTab] = useState("Frontend"); // Default tab

//   // filter skills by category
//   const Frontend = data?.filter(skill => skill.category === "Frontend");
//   const Backend = data?.filter(skill => skill.category === "Backend");
//   const Firebase = data?.filter(skill => skill.category === "Firebase");
//   const VersionControl = data?.filter(skill => skill.category === "Version Control");
//   const ProgrammingFundamentals = data?.filter(skill => skill.category === "Programming Fundamentals");
//   const ToolsAndPlatforms = data?.filter(skill => skill.category === "Tools & Platforms");
//   const AuthenticationAndSecurity = data?.filter(skill => skill.category === "Authentication & Security");
//   const AIAndModernTechnologies = data?.filter(skill => skill.category === "AI & Modern Tech");
//   const Extra = data?.filter(skill => skill.category === "Extra");
//   const UI_UX_Design = data?.filter(skill => skill.category === "UI / UX Design");

//   // Get skills to display based on active tab
//   const getActiveSkills = () => {
//     switch(activeTab) {
//       case "Frontend": return Frontend;
//       case "Backend": return Backend;
//       case "Firebase": return Firebase;
//       case "Version Control": return VersionControl;
//       case "Programming Fundamentals": return ProgrammingFundamentals;
//       case "Tools & Platforms": return ToolsAndPlatforms;
//       case "Authentication & Security": return AuthenticationAndSecurity;
//       case "AI & Modern Tech": return AIAndModernTechnologies;
//       case "Extra": return Extra;
//       case "UI / UX Design": return UI_UX_Design;
//       default: return [];
//     }
//   }

//   const activeSkills = getActiveSkills();

//   return (
//       <div className="bg-backgroundBg dark:bg-backgroundDark min-h-screen text-textColor pt-32">
//         <div className="container mx-auto px-4">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold mb-4 text-center text-buttonBankground dark:text-textColor">Skills</h1>
//       <hr className="border-t-2 border-buttonBankground dark:border-textColor mb-10 w-full" />

//       {/* Tabs */}
//       <div role="tablist" className="tabs tabs-lift mb-8 flex flex-wrap gap-2 justify-center">
//         {["Frontend","Backend","Firebase","Version Control","Programming Fundamentals","Tools & Platforms","Authentication & Security","AI & Modern Tech","Extra","UI / UX Design"].map(tab => (
//           <button
//             key={tab}
//             role="tab"
//             className={`${activeTab === tab ? "tab-active text-buttonBankground dark:text-textColor bg-backgroundDark border-buttonBankground dark:border-buttonTextColor " : "bg-backgroundBg dark:bg-backgroundDark border-textColor"} border-t-2 border-r-2 border-l-2 p-2 rounded-md`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Skills */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
//         {activeSkills?.[0]?.skills?.map((skill, i) => (
//           <div key={i} className="flex flex-col items-center cursor-pointer gap-4 p-4 border border-buttonBankground dark:border-textColor bg-backgroundBg dark:bg-backgroundDark rounded-lg shadow shadow-buttonTextColor  hover:shadow-lg transition">
//             <img src={skill.logo} alt={skill.name} className="w-14 h-14"/>
//             <div className="w-full text-buttonBankground dark:text-textColor">
//               <div className="flex justify-between mb-1 my-14">
//                 <span className="font-medium">{skill.name}</span>
//                 <span className="font-medium">{skill.level}</span>
//                 <span className="text-sm">{skill.percentage}%</span>
//               </div>
//               <div className="w-full bg-textColor  h-2 rounded-full">
//                 <div className="bg-buttonTextColor dark:bg-buttonTextColor  h-2 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//       </div>
//   );
// };

// export default Skill;


import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Skill = () => {
  const { data } = useFetch("skill.json");

  const [activeTab, setActiveTab] = useState("Frontend");

  // filter skills by category
  const Frontend = data?.filter(skill => skill.category === "Frontend");
  const Backend = data?.filter(skill => skill.category === "Backend");
  const Firebase = data?.filter(skill => skill.category === "Firebase");
  const VersionControl = data?.filter(skill => skill.category === "Version Control");
  const ProgrammingFundamentals = data?.filter(skill => skill.category === "Programming Fundamentals");
  const ToolsAndPlatforms = data?.filter(skill => skill.category === "Tools & Platforms");
  const AuthenticationAndSecurity = data?.filter(skill => skill.category === "Authentication & Security");
  const AIAndModernTechnologies = data?.filter(skill => skill.category === "AI & Modern Tech");
  const Extra = data?.filter(skill => skill.category === "Extra");
  const UI_UX_Design = data?.filter(skill => skill.category === "UI / UX Design");

  const getActiveSkills = () => {
    switch (activeTab) {
      case "Frontend": return Frontend;
      case "Backend": return Backend;
      case "Firebase": return Firebase;
      case "Version Control": return VersionControl;
      case "Programming Fundamentals": return ProgrammingFundamentals;
      case "Tools & Platforms": return ToolsAndPlatforms;
      case "Authentication & Security": return AuthenticationAndSecurity;
      case "AI & Modern Tech": return AIAndModernTechnologies;
      case "Extra": return Extra;
      case "UI / UX Design": return UI_UX_Design;
      default: return [];
    }
  };

  const activeSkills = getActiveSkills();

  return (
    <div className="bg-backgroundBg dark:bg-backgroundDark min-h-screen text-textColor pt-32">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h1
          data-aos="fade-down"
          className="text-4xl font-bold mb-4 text-center text-buttonBankground dark:text-textColor"
        >
          Skills
        </h1>

        <hr
          data-aos="zoom-in"
          data-aos-delay="200"
          className="border-t-2 border-buttonBankground dark:border-textColor mb-10 w-full"
        />

        {/* Tabs */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          role="tablist"
          className="tabs tabs-lift mb-8 flex flex-wrap gap-2 justify-center"
        >
          {[
            "Frontend",
            "Backend",
            "Firebase",
            "Version Control",
            "Programming Fundamentals",
            "Tools & Platforms",
            "Authentication & Security",
            "AI & Modern Tech",
            "Extra",
            "UI / UX Design"
          ].map(tab => (
            <button
              key={tab}
              role="tab"
              className={`${activeTab === tab
                ? "tab-active text-buttonBankground dark:text-textColor bg-backgroundDark border-buttonBankground dark:border-buttonTextColor"
                : "bg-backgroundBg dark:bg-backgroundDark border-textColor"
                } border-t-2 border-r-2 border-l-2 p-2 rounded-md transition-all duration-300`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {activeSkills?.[0]?.skills?.map((skill, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="flex flex-col items-center cursor-pointer gap-4 p-4 border border-buttonBankground dark:border-textColor bg-backgroundBg dark:bg-backgroundDark rounded-lg shadow shadow-buttonTextColor hover:shadow-lg transition"
            >
              <img src={skill.logo} alt={skill.name} className="w-14 h-14" />

              <div className="w-full text-buttonBankground dark:text-textColor">
                <div className="flex justify-between mb-1 my-14">
                  <span className="font-medium">{skill.name}</span>
                  <span className="font-medium">{skill.level}</span>
                  <span className="text-sm">{skill.percentage}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-textColor h-2 rounded-full">
                  <div
                    data-aos="fade-right"
                    data-aos-delay={i * 150}
                    className="bg-buttonTextColor dark:bg-buttonTextColor h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skill;


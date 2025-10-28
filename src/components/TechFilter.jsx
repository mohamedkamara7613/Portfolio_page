// TechFilter.jsx
import { useState, useEffect } from "react";

const TechFilter = ({ projects, onFilterChange }) => {
  const [activeTech, setActiveTech] = useState(null);
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    const allTechs = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => allTechs.add(tech));
    });
    setTechList([...allTechs]);
  }, [projects]);

  const handleClick = (tech) => {
    const newTech = tech === activeTech ? null : tech;
    setActiveTech(newTech);
    onFilterChange(newTech);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 font-mono">
      <button
        onClick={() => handleClick(null)}
        className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
          activeTech === null
            ? "bg-cyan-400/20 border-cyan-400 text-cyan-400 shadow-[0_0_15px_#22d3ee40]"
            : "bg-gray-800/50 border-gray-600 text-gray-400 hover:border-cyan-400/30 hover:text-cyan-300"
        }`}
      >
        all_technologies
      </button>

      {techList.map((tech) => (
        <button
          key={tech}
          onClick={() => handleClick(tech)}
          className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
            activeTech === tech
              ? "bg-purple-400/20 border-purple-400 text-purple-400 shadow-[0_0_15px_#c084fc40]"
              : "bg-gray-800/50 border-gray-600 text-gray-400 hover:border-purple-400/30 hover:text-purple-300"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default TechFilter;

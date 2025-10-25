// src/components/TechFilter.jsx
import { useState, useEffect } from "react";

const TechFilter = ({ projects, onFilterChange }) => {
  const [activeTech, setActiveTech] = useState(null);
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    // Récupère toutes les technos uniques
    const allTechs = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => allTechs.add(tech));
    });
    setTechList([...allTechs]);
  }, [projects]);

  const handleClick = (tech) => {
    const newTech = tech === activeTech ? null : tech; // Reset si clique sur la même techno
    setActiveTech(newTech);
    onFilterChange(newTech);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {techList.map((tech) => (
        <button
          key={tech}
          onClick={() => handleClick(tech)}
          className={`px-3 py-1 border rounded ${
            activeTech === tech ? "bg-gray-300" : ""
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default TechFilter;

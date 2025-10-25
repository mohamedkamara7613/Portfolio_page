import { useState } from "react";
import { Element } from "react-scroll";
import TechFilter from "./TechFilter";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredProjects = selectedTech
    ? projects.filter(project =>
        project.technologies.includes(selectedTech)
      )
    : projects;

  return (
    <section id="projects" className="w-full py-20 bg-neutral-950 text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>

      <TechFilter projects={projects} onFilterChange={setSelectedTech} />

      <div className=" max-w-7xl px-8 flex flex-col gap-12 items-center w-full mt-10">
        {filteredProjects.map(project => (
          <Element key={project.id} name={`project-${project.id}`}>
            <ProjectCard key={project.id} {...project} />
          </Element>
        ))}
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

    </section>
  );
}


//max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6
import { useState } from "react";
import { Element } from "react-scroll";
import TechFilter from "./TechFilter";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection({ projects }) {
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredProjects = selectedTech
    ? projects.filter(project =>
        project.technologies.includes(selectedTech)
      )
    : projects;

  return (
    <section id="projects" className="relative w-full py-20 bg-gray-900 overflow-hidden">
    {/* Effets de fond cyber PLUS SOMBRES */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête style terminal */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-6"
        >
          <div className="font-mono text-4xl font-bold mb-4">
            <span className="text-cyan-400">$ </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              projects_list
            </span>
            <span className="text-green-400 animate-pulse">_</span>
          </div>
          <p className="text-gray-400 font-mono text-lg">
            // {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            {selectedTech && ` • filter: ${selectedTech}`}
          </p>
        </motion.div>

        {/* Filtre des technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 px-6"
        >
          <TechFilter 
            projects={projects} 
            onFilterChange={setSelectedTech} 
          />
        </motion.div>

        {/* Liste des projets */}
        <div className="px-6">
         <motion.div
  key={selectedTech || 'all'} // Ce key force la ré-animation
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  className="flex flex-col gap-16"
>
  {filteredProjects.map((project, index) => (
    <Element key={project.id} name={project.id}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5 }}
      >
        <ProjectCard {...project} index={index} />
      </motion.div>
    </Element>
  ))}
</motion.div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 font-mono"
            >
              <div className="text-gray-400 text-xl mb-4">
                <span className="text-cyan-400">~$ </span>
                no_projects_found
              </div>
              <p className="text-gray-500">
                // Try selecting different technologies
              </p>
            </motion.div>
          )}
        </div>

        {/* Séparateur cyber */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mt-20 mx-auto"
        />
      </div>
    </section>
  );
}
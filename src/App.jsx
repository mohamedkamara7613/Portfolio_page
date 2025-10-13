import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

function App() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Mes Projets</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </div>
  );
}

export default App;

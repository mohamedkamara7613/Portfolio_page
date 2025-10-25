
import React from "react";
import { Element } from "react-scroll";
import SplashCursor from "@/components/SplashCursor";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { projects } from "./data/projects";
import { contacts } from "./data/contacts";

export default function App() {
  return (
    <div>
      <SplashCursor />
      <Navbar projects={projects} contacts={contacts} />

      <Element name="hero-section">
        <Hero />
      </Element>

      <Element name="projects-section">
        <ProjectsSection projects={projects} />
      </Element>

      <Element name="contacts-section">
        <ContactSection contacts={contacts} />
      </Element>
    </div>
  );
}

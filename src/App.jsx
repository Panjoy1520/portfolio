import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/hero";
import About from "./sections/About";
import Projects from "./sections/Projects"
import Contact from "./sections/Contact";


function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/hero";
import About from "./sections/About";
import Projects from "./sections/Projects"

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
    </div>
  );
}

export default App;

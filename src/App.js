import React from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Projects";
import Contact from "./Contact";
import "./App.css";
import Hero from "./Hero";
import Skills from "./Skills";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

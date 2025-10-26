import React from "react";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Resume from "../components/Resume/Resume";
import ContactForm from "../components/ContactForm/ContactForm";
import Skills from "../components/Skills/Skills";

const Homepage = () => {
  return (
    <div>
      <section id="home">Home content...</section>
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <ContactForm />
    </div>
  );
};

export default Homepage;

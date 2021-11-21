import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import MyWork from "../components/MyWork";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TechnologiesSection from "../components/TechnologiesSection";
import AboutMeSection from "../components/AboutMeSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/TechnologiesSection/Data";
import Contact from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutMeSection {...homeObjOne} />
      <TechnologiesSection {...homeObjTwo} />
      <MyWork {...homeObjThree} />
      <Contact {...homeObjFour} />
      <Footer />
    </Router>
  );
};

export default Home;

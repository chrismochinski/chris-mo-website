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
import { useSelector } from 'react-redux';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sound = useSelector((store) => store.soundState.soundSetting);
  const selectedPage = useSelector(store => store.setSelectedPage.selectedPage)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log('sound on HOME is', sound)
  console.log('selected page HOME is:', selectedPage)


  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} sound={sound} selectedPage={selectedPage} />
      <Navbar toggle={toggle} selectedPage={selectedPage} />
      <HeroSection sound={sound} selectedPage={selectedPage} />
      <AboutMeSection {...homeObjOne} selectedPage={selectedPage} />
      <TechnologiesSection {...homeObjTwo} selectedPage={selectedPage} />
      <MyWork {...homeObjThree} selectedPage={selectedPage} />
      <Contact {...homeObjFour} selectedPage={selectedPage} />
      <Footer sound={sound} selectedPage={selectedPage} />
    </Router>
  );
};

export default Home;

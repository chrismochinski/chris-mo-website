import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TechnologiesSection from '../components/TechnologiesSection';
import { homeObjOne } from '../components/TechnologiesSection/Data';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        console.log('Detected hamburger clickage...is it open?', isOpen)
        setIsOpen(!isOpen)
    }

    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <TechnologiesSection {...homeObjOne}/>
        </Router>
    )
};

export default Home;
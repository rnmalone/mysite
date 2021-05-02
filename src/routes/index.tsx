import React from 'react';
import Home from './Home'
import SkillGraph from "./Skills";
import Occupation from "./Occupation";
import Contact from "./Contact";
import Projects from "./Projects";

export default () => {
    return (
        <>
            <Home/>
            <SkillGraph/>
            <Projects/>
            <Occupation/>
            <Contact/>
        </>
    )
}

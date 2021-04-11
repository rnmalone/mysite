import React from 'react';
import Home from './Home'
import SkillGraph from "./Skills";
import PageGallery from "../containers/PageGallery/PageGallery";
import Occupation from "./Occupation";
import Contact from "./Contact";

export default () => {
    return (
       <PageGallery>
            <Home />
            <SkillGraph />
            <Occupation />
            <Contact />
       </PageGallery>
    )
}

import React from 'react';
import Home from './Home'
import SkillGraph from "./Skills";
import PageGallery from "../containers/PageGallery/PageGallery";

export default () => {
    return (
       <>
           <PageGallery>
            <Home />
            <SkillGraph />
           </PageGallery>
       </>
    )
}

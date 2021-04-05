import React from 'react';
import {Route, Switch} from "react-router";

import Home from './Home'
import SkillGraph from "./Skills";

export default () => {
    return (
       <div>
            <Home />
            <SkillGraph />
       </div>
    )
}

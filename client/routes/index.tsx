import React from 'react';
import {Route, Switch} from "react-router";

import Todos from './Todos'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Todos}/>
        </Switch>
    )
}

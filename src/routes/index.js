// DEPENDENCIES
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Home from '../views/home';

const AppRoutes = () => 
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>;


export default AppRoutes;
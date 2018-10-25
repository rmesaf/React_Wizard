// DEPENDENCIES
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// PAGES
import Home from '../components/pages/home';

const AppRoutes = () => 
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>;


export default AppRoutes;
// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// ROUTES
import AppRoutes from './routes';

// STYLES
import styles from './styles/main.scss';


class createApp extends React.Component {
    render(){
        return (
            <Router>
                <AppRoutes />
            </Router>
        );
    }
}

export default createApp;
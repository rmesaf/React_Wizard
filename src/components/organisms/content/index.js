// DEPENDENCIES
import React from 'react';
import { Provider } from 'react-redux';
// STORE
import store from "../../../store";
// MOLECULES
import Wizard from '../../molecules/wizard';
// ASSETS  
import styles from './content.scss';

const Content = (props) => {
    return (
        <div className="content">
            <Provider store={store}>
                <Wizard />
            </Provider>
        </div>
    );
};

export default Content;
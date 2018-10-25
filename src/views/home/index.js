// DEPENDENCIES
import React from 'react';
import { Provider } from 'react-redux';
import store from "../../store";

// COMPONENTS
import Header from '../../components/header';
import Wizard from '../../components/wizard';

// STYLES
const styles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
    justifyContent: 'center'
};

class Home extends React.Component {

    render(){
        return (
            <div>
                <Header />
                <div className="content" style={styles}>
                    <Provider store={store}>
                        <div>
                            <Wizard />
                        </div>
                    </Provider>
                </div>
            </div>
        );
    }
}

export default Home;
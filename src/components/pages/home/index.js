// DEPENDENCIES
import React from 'react';

// ORGANISMS
import Header from '../../organisms/header';
import Content from '../../organisms/content';


class Home extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

export default Home;
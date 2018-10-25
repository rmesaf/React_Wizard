// DEPENDENCIES
import React from 'react';

// STYLES
import styles from '../../styles/main.scss'


class WelcomePage extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state  = {
            step: "WELCOME"
        }
    }
    handleClick(e){
        this.props.nextStep("FORM")
    }
    render(){
        if(this.props.currentStep == this.state.step){
            return (
                <div>
                    <div className="jumbotron">
                        <h1>Welcome</h1>
                    </div>
                    <div className="button-container">
                        <button className="button button-blue" onClick={this.handleClick}>CONTINUAR</button>
                    </div>
                </div>
            );
        }else{
            return (null);
        }
    }
}

export default WelcomePage;

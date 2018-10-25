// DEPENDENCIES
import React from 'react';

// STYLES
import styles from '../../styles/main.scss'

class FinalPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state  = {
            step: "COMEBACK"
        }
    }
    handleClick(e){
        this.props.nextStep("WELCOME")
    }
    render(){
        if(this.props.currentStep == this.state.step){
            return (
                <div>
                    <div className="jumbotron">
                        <h1>Come Back Soon</h1>
                    </div>
                    <div className="button-container">
                        <button className="button button-blue" onClick={this.handleClick}>VUELVE</button>
                    </div>
                </div>
            );
        }else{
            return(null);
        }
    }
}

export default FinalPage;

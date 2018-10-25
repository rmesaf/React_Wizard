// DEPENDENCIES
import React from 'react';
// ATOMS
import Button from '../../atoms/button';
// STYLES
import styles from '../../../styles/main.scss'

class Final extends React.Component {
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
                        <Button onClick={this.handleClick}>VUELVE</Button>
                    </div>
                </div>
            );
        }else{
            return(null);
        }
    }
}

export default Final;

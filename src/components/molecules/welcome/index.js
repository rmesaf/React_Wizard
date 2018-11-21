// DEPENDENCIES
import React from 'react';

// ATOMS
import Button from '../../atoms/button';

// STYLES
import styles from '../../../styles/main.scss'


class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state  = {
            step: "WELCOME"
        }
    }
    handleClick(e){
        this.props.nextStep("ANCHOR")
    }
    render(){
        if(this.props.currentStep == this.state.step){
            return (
                <div>
                    <div className="jumbotron">
                        <h1>Welcome</h1>
                    </div>
                    <div className="button-container">
                        <Button onClick={this.handleClick} text="NEXT"></Button>
                    </div>
                </div>
            );
        }else{
            return (null);
        }
    }
}

export default Welcome;

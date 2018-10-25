// DEPENDENCIES
import React from 'react';
import { connect } from 'react-redux';

// STYLES
import styles from '../../../styles/main.scss'
import style from './wizard.scss';

// MOLECULES
import Welcome from '../welcome';
import Form from '../form';
import Final from '../final';

// ACTION
import {next_action} from '../../../actions';


class Wizard extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="wizard-container"> 
                <Welcome currentStep={this.props.current} nextStep={this.props.nextStep}/>
                <Form currentStep={this.props.current} nextStep={this.props.nextStep}/>
                <Final currentStep={this.props.current} nextStep={this.props.nextStep}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        current: state.current.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextStep(nextStep){
            dispatch(next_action(nextStep));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Wizard);

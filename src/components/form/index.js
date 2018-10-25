// DEPENDECIES
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// ACTION
import {load_action} from '../../actions';

// VARIABLES
const initialState = {
    firstName: 'Jane',
    lastName: 'Doe',
}


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: "FORM"
        }
    }
    handleClick(){
        this.props.load(initialState);
        console.log(this.props);
    }
    handleSubmit(){
        this.props.nextStep("COMEBACK");
    }
    render(){
        if(this.props.currentStep == this.state.step){
            return (
                <div>
                    <div className="jumbotron">
                        <h1>FORM</h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="button-container">
                                <button className="button button-blue" type="button" onClick={this.handleClick.bind(this)} style={{ marginRight: 0}}>Load Account</button>
                            </div>
                            <div>
                                <label>First Name</label>
                                <div>
                                    <Field 
                                        name= "firstName"
                                        component= "input"
                                        type="text"
                                        placeholder='First Name'
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <div>
                                    <Field 
                                        name= "lastName"
                                        component= "input"
                                        type="text"
                                        placeholder='Last Name'
                                    />
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="button button-blue" type="submit" disabled={false}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }else{
            return (null);
        }
    }
}

Form = reduxForm({
    form: 'form',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, 
})(Form);

const mapStateToProps = state => {
    return {
        initialValues: state.load.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load(initialState){
            dispatch(load_action(initialState));
        }
    };
}

Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default Form;


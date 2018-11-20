// DEPENDECIES
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
// ATOMS
import Button from '../../atoms/button';
// ACTION
import {load_action, save_action} from '../../../actions';


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: "FORM"
        }
    }
    handleClick(){
        const initialState = (this.props.gender == "FEMENINO" ? {firstName: 'JANE', lastName: 'DOE'} : {firstName: 'JOHN', lastName: 'DOE'} );
        this.props.load(initialState);
    }
    handleSubmit(){
        this.props.save({
            firstName: this.props.firstName.toUpperCase(),
            lastName: this.props.lastName.toUpperCase()
        })
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
                                <button className="button button-gray" type="button" onClick={this.handleClick.bind(this)} style={{ marginRight: 0}}>Load Account</button>
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
                                <button className="button button-gray" type="submit" disabled={false}>
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

const selector = formValueSelector('form');

const mapStateToProps = state => {
    return {
        initialValues: state.load.data,
        gender: state.wizard.gender,
        firstName: selector(state, 'firstName'),
        lastName: selector(state, 'lastName')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load(initialState){
            dispatch(load_action(initialState));
        },
        save(selection){
            dispatch(save_action(selection));
        }
    };
}

Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default Form;


// DEPENDECIES
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
// ATOMS
import Button from '../../atoms/button';
// ACTION
import {load_action, save_action} from '../../../actions';
// STYLES
import styles from './styles.scss';
// VALIDATIONS
import { validate } from "./validate";

const renderField = ({ input, name, placeholder, type, meta: { touched, error } }) => (
    <div>
        <input {...input} name={name} placeholder={placeholder} type={type}/>
        {touched && error && <span>{error}</span>}
    </div>
)


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: "FORM"
        }
        console.log('Enter Constructor')
    }
    handleClick(){
        const initialState = (this.props.gender == "Female" ? {firstName: 'Jane', lastName: 'Doe', email: 'jane@doe.co'} : {firstName: 'John', lastName: 'Doe' , email: 'john@doe.co'} );
        this.props.load(initialState);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.save({
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email
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
                                <button className="button button-gray load" type="button" onClick={this.handleClick.bind(this)} >Load Account</button>
                            </div>
                            <div>
                                <label>First Name</label>
                                <div>
                                    <Field
                                        required
                                        name= "firstName"
                                        component= {renderField}
                                        type="text"
                                        placeholder='First Name'
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <div>
                                    <Field
                                        required 
                                        name= "lastName"
                                        component= {renderField}
                                        type="text"
                                        placeholder='Last Name'
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Email</label>
                                <div>
                                    <Field 
                                        required
                                        name= "email"
                                        component= {renderField}
                                        type="email"
                                        placeholder='Email'
                                    />
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="button button-blue" type="submit" disabled={ this.props.pristine || this.props.submitting}>
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
    validate
})(Form);

const selector = formValueSelector('form');

const mapStateToProps = state => {
    return {
        initialValues: state.load.data,
        gender: state.wizard.gender,
        firstName: selector(state, 'firstName'),
        lastName: selector(state, 'lastName'),
        email: selector(state, 'email')
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


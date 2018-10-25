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
    sex: 'female',
}

let Form = (props) => {
    const { handleSubmit, load, pristine, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button type="button" onClick={() => load(initialState)}>Load Account</button>
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
            <div>
                <label>Sex</label>
                <div>
                    <label>
                        <Field 
                            name= "sex"
                            component= "input"
                            type="radio"
                            value='male'
                        />
                        Male
                    </label>
                    <label>
                        <Field 
                            name= "sex"
                            component= "input"
                            type="radio"
                            value='female'
                        />
                        Female
                    </label>
                </div>
            </div>
            <div>
                <button type="submit" disabled={submitting}>
                    Submit
                </button>
            </div>
        </form>
    );
};

Form = reduxForm({
    form: 'form',
})(Form);

const mapStateToProps = state => {
    return {
        initialValues: state.account.data
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
export const validate = values => {
    const errors = {}
    // firstName
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 3) {
        errors.firstName = 'Must be 3 characters or more'
    }
    // firstName
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 3) {
        errors.lastName = 'Must be 3 characters or more'
    }
    // email
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email address'
    }
    return errors
}
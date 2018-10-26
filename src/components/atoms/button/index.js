// DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types'

// STYLES
import styles from './button.scss'

const Button = (props) => {
    return (
        <button className="button button-blue" onClick={props.onClick} disabled={props.disabled}>{props.text || "CONTINUAR"} </button>
    );
}

Button.protoTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button;

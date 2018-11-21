// DEPENDENCIES
import React from 'react';
import { connect } from 'react-redux';
//ATOMS
import Button from '../../atoms/button'
//STYLES
import styles from './anchor.scss';
// ACTION
import {save_action} from '../../../actions';

class Anchor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: "ANCHOR",
            isOptionSelected: false,
            selected: "",
        }
    }
    handleSelectionClick(e){
        e.preventDefault();
        let selection = e.currentTarget.getAttribute('data-value');
        this.setState({
            isOptionSelected: true,
            selected: selection,
        })
    }
    handleClick(e){
        e.preventDefault();
        this.props.save({
            gender: this.state.selected
        });
        this.props.nextStep("FORM");
    }
    
    render(){
        if(this.props.currentStep == this.state.step){
            return (
                <div>
                    <div className="jumbotron jumbotron-flex">
                        <a onClick={this.handleSelectionClick.bind(this)} data-value="Male" className={this.state.selected == 'Male' ? 'anchor-button active' : 'anchor-button'}>MALE</a>
                        <a onClick={this.handleSelectionClick.bind(this)} data-value="Female" className={this.state.selected == 'Female' ? 'anchor-button active' : 'anchor-button'}>FEMALE</a>
                    </div>
                    <div className="button-container">
                        <Button text="GO ON" onClick={this.handleClick.bind(this)} disabled={!this.state.isOptionSelected}/>
                    </div>
                </div>
            );
        }else{
            return(null);
        }
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        save(selection){
            dispatch(save_action(selection));
        }
    }
}

Anchor = connect(
    mapStateToProps,
    mapDispatchToProps
)(Anchor);

export default Anchor;
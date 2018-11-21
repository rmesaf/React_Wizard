// DEPENDENCIES
import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
// ATOMS
import Button from '../../atoms/button';
// STYLES
import styles from '../../../styles/main.scss'
import style from './styles.scss';
// ACTION
import {reset_action} from '../../../actions';

ReactModal.setAppElement('#app');

class Final extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state  = {
            step: "COMEBACK",
            showModal: true
        }
    }
    handleClick(e){
        console.log(this.state);
        this.props.reset();
    }
    handleCloseModal(){
        this.setState({
            showModal: false
        })
    }
    render(){
        if(this.props.currentStep == this.state.step){
            return (
                <div>
                    <ReactModal 
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal.bind(this)}
                        className="Modal"
                        overlayClassName="Overlay">

                        <p><strong>Name: </strong>{this.props.firstName + " " + this.props.lastName}</p>
                        <p><strong>Email: </strong>{this.props.email}</p>
                        <p><strong>Gender: </strong>{this.props.gender}</p>
                        <div className="button-container">
                            <button className="button button-blue" onClick={this.handleCloseModal.bind(this)}>CLOSE</button>
                        </div>
                    </ReactModal>
                    <div className="jumbotron">
                        <h1>Come Back Soon</h1>
                    </div>
                    <div className="button-container">
                        <Button onClick={this.handleClick} text="RESTART"></Button>
                    </div>
                </div>
            );
        }else{
            return(null);
        }
    }
}

const mapStateToProps = state => {
    return {
        gender: state.wizard.gender,
        firstName: state.wizard.firstName,
        lastName: state.wizard.lastName,
        email: state.wizard.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reset(){
            dispatch(reset_action());
        }
    }
}

Final = connect(
    mapStateToProps,
    mapDispatchToProps
)(Final);

export default Final;

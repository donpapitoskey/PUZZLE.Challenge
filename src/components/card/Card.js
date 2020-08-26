import React, { Component } from 'react'
import styles from './card.module.css'
import Modal from '../modal/Modal'
import PropTypes from 'prop-types'



export default class Card extends Component {

    constructor(props) {
        super(props);
        
    };


    state={
        modalToggle: false
    }

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: !this.state.modalToggle
        })
    };

    

    render() {
        
        return (
            <div className={styles.container} onClick={this.modalHandler}>
                
                <label>
                    <h4> {this.props.name ? this.props.name : null} </h4> 
                    <h4>{this.props.created ? this.props.created : null}</h4>
                    <p>{this.props.episode ? this.props.episode : null}</p>
                </label>
                <Modal show = { this.state.modalToggle}
                modalClosed={this.modalHandler} 
                value={this.props.value} 
                chars={this.props.value.characters}>
                    
                </Modal>
            </div>
        )

    }


}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    created: PropTypes.string,
    episode: PropTypes.string
}

export class Auxcard extends Component {

    constructor(props) {
        super(props);
        
    };


    state={
        modalToggle: false
    }

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: !this.state.modalToggle
        })
    };

    

    render() {
        
        return (
            <div className={styles.container} onClick={this.modalHandler}>
                
                
        <h3>{this.props.value.name}</h3>
                
            </div>
        )

    }


}

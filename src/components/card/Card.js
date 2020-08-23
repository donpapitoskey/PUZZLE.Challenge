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
                <h3>Card</h3>
                <label>
                    Image
                </label>
                <Modal show = { this.state.modalToggle} modalClosed={this.modalHandler}>
                    <div style={{color:'black'}}>
                        Things to show
                    </div>
                </Modal>
            </div>
        )

    }


}
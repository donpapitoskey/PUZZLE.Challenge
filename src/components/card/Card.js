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
            <div>
            <div className={styles.container} onClick={this.modalHandler}>
                
                <label>
                    <h3> {this.props.name ? this.props.name : null} </h3> 
                    <h3>{this.props.created ? this.props.created : null}</h3>
                    <h4>{this.props.type && !this.props.image ? this.props.type : null}</h4>
                    <p>{this.props.episode ? this.props.episode : null}</p>
                    <p>{this.props.dimension ? this.props.dimension : null}</p>
                    
                </label>
                <img src={this.props.image? this.props.image : null} height={this.props.image ? "200px" : null}/>
                
            </div>
            <Modal show = { this.state.modalToggle}
            modalClosed={this.modalHandler} 
            value={this.props.value} 
            chars={this.props.value.characters ? this.props.value.characters :null}
            residents = {this.props.value.residents? this.props.value.residents : null} />
            </div>
        )

    }


}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    created: PropTypes.string,
    episode: PropTypes.string,
    type: PropTypes.string,
    dimension: PropTypes.string
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

Auxcard.propTypes = {
    name: PropTypes.string.isRequired,
    created: PropTypes.string,
    episode: PropTypes.string,
    type: PropTypes.string,
    dimension: PropTypes.string
}
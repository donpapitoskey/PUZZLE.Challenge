import React, { Component } from 'react'
import styles from './card.module.css'
import Modal from '../modal/Modal'
import PropTypes from 'prop-types'



export default class Card extends Component {

    state = {
        modalToggle: false
    }

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: !this.state.modalToggle
        })
    };



    render() {
        let { modalToggle } = this.state;
        let { name, created, type, episode, dimension, image, value } = this.props;
        return (
            <div>
                <div className={styles.container} onClick={this.modalHandler}>

                    <label>
                        <h3> {name ? name : null} </h3>
                        <p>{created ? created : null}</p>
                        <h4>{type && !image ? this.props.type : null}</h4>
                        <p>{episode ? episode : null}</p>
                        <p>{dimension ? dimension : null}</p>
                    </label>
                    <img src={image ? image : null} height={image ? "200px" : null} />
                </div>
                <Modal show={modalToggle}
                    modalClosed={this.modalHandler}
                    value={value}
                    chars={value.characters ? value.characters : null}
                    residents={value.residents ? value.residents : null} />
            </div>
        )

    }


}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    created: PropTypes.string,
    episode: PropTypes.string,
    type: PropTypes.string,
    dimension: PropTypes.string,
    image: PropTypes.string,
    value: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        dimension: PropTypes.string,
        image: PropTypes.string,
        gender: PropTypes.string,
        species: PropTypes.string,
        episode: PropTypes.string,
        created: PropTypes.string,
        residents: PropTypes.arrayOf(PropTypes.string),
        characters: PropTypes.arrayOf(PropTypes.string)

    })
}


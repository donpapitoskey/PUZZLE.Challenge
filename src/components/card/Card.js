import React, { Component } from 'react';
import styles from './card.module.css';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';

export default class Card extends Component {

    state = {
        modalToggle: false,
    };

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: !this.state.modalToggle,
        })
    };

    render() {
        const { modalToggle } = this.state;
        const { name, created, type, episode, dimension, image, value } = this.props;
        return (
            <div>
                <div className={styles.container} onClick={this.modalHandler}>
                    <label>
                        {name !== null && <h3>{name}</h3>}
                        {created !== null && <p>{created}</p>}
                        {type && !image && <h4>{type}</h4>}
                        {episode !== null && <p>{episode}</p>}
                        {dimension !== null && <p>{dimension}</p>}
                    </label>
                    {image !== null && <img src={image} height={image ? "200px" : null} alt="" />}
                </div>
                <Modal show={modalToggle}
                    modalClosed={this.modalHandler}
                    name={name}
                    image={image}
                    type={type}
                    episode={episode}
                    dimension={dimension}
                    created={created}
                    gender={value.gender}
                    species={value.species}
                    chars={value.characters ? value.characters : null}
                    residents={value.residents ? value.residents : null} />
            </div>
        );
    };
};

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
        characters: PropTypes.arrayOf(PropTypes.string),
    }),
};

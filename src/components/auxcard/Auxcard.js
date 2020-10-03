import React, { Component } from 'react';
import styles from './auxcard.module.css';
import PropTypes from 'prop-types';

export default class Auxcard extends Component {

    state = {
        modalToggle: false,
    };

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: !this.state.modalToggle,
        });
    };

    render() {
        const { name } = this.props;
        return (
            <div className={styles.container} onClick={this.modalHandler}>
                <h3>{name ? name : "None"}</h3>
            </div>
        );
    };
};

Auxcard.propTypes = {
    name: PropTypes.string.isRequired,
};
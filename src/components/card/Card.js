import React, { Component } from 'react'
import styles from './card.module.css'

import PropTypes from 'prop-types'



export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selecterOption: "characters"
        };
    }
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    render() {
        
        return (
            <div className={styles.container}>
                <h3>Card</h3>
                <label>
                    Image
                </label>
            </div>
        )

    }


}

import React, { Component } from 'react'
import styles from './pages.module.css'

import PropTypes from 'prop-types'




export default class Pages extends Component {

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
                <h3>Pages</h3>
                
            </div>
        )

    }


}
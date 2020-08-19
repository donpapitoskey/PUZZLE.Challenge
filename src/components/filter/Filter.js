import React, { Component } from 'react'
import styles from './filter.module.css'

import PropTypes from 'prop-types'






export default class Filter extends Component {

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
                <h3>Filters</h3>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        className="form-check-input"
                        value="characters"
                        checked={this.state.selectedOption === "characters"}
                        onChange={this.handleOptionChange} /> Characters
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        className="form-check-input"
                        value="locations"
                        checked={this.state.selectedOption === 'locations'}
                        onChange={this.handleOptionChange} /> Locations
                </label>
                <label>
                    <input
                        type="radio"
                        name= "filter"
                        value="episodes"
                        className="form-check-input"
                        checked={this.state.selectedOption === 'episodes'}
                        onChange={this.handleOptionChange} /> Episodes
                </label>
            </div>
        )

    }


}


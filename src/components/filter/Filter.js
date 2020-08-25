import React, { Component } from 'react'
import styles from './filter.module.css'
import {connect}from 'react-redux'; //conectar componente con redux
import {setFilterAction} from '../../redux/searchDuck';






class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "characters"
        };
        this.props.setFilterAction(this.state.selectedOption)
    }
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
        this.props.setFilterAction(changeEvent.target.value);
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

function mapStateToProps (store){
    return {
        filterOption: store.search.typeOfSearch
    }
};

export default connect(mapStateToProps,{setFilterAction})(Filter);
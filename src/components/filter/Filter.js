import React, { Component } from 'react'
import styles from './filter.module.css'
import {connect}from 'react-redux'; //conectar componente con redux
import {setFilterAction, getSearchAction, eraseStoreAction} from '../../redux/searchDuck';






class Filter extends Component {

    
    handleOptionChange = changeEvent => {
       
        this.props.setFilterAction(changeEvent.target.value);
        this.props.eraseStoreAction();
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
                        checked={this.props.filterOption === "characters"}
                        onChange={this.handleOptionChange} /> Characters
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        className="form-check-input"
                        value="locations"
                        checked={this.props.filterOption === 'locations'}
                        onChange={this.handleOptionChange} /> Locations
                </label>
                <label>
                    <input
                        type="radio"
                        name= "filter"
                        value="episodes"
                        className="form-check-input"
                        checked={this.props.filterOption === 'episodes'}
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

export default connect(mapStateToProps,{setFilterAction, getSearchAction, eraseStoreAction})(Filter);
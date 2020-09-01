import React, { Component } from 'react'
import styles from './filter.module.css'
import Backdrop from '../modal/Backdrop';
import { connect } from 'react-redux'; //conectar componente con redux
import { setFilterAction, getSearchAction, eraseStoreAction } from '../../redux/searchDuck';

class Filter extends Component {


    handleOptionChange = changeEvent => {

        this.props.setFilterAction(changeEvent.target.value);
        this.props.eraseStoreAction();
    };

    render() {
        return (
            <div className={this.props.small ? styles.containerSmall : styles.container}
            style={{
                transform: this.props.show ? 'translateX(0)' :
                  'translateX(-100vh)',
                opacity: this.props.show ? 1 : 0
              }}>
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
                        name="filter"
                        value="episodes"
                        className="form-check-input"
                        checked={this.props.filterOption === 'episodes'}
                        onChange={this.handleOptionChange} /> Episodes
                </label>
                <Backdrop show={this.props.show && this.props.small} clicked={this.props.modalClosed} />
            </div>
        )
    }

}

function mapStateToProps(store) {
    return {
        filterOption: store.search.typeOfSearch
    }
};

export default connect(mapStateToProps, { setFilterAction, getSearchAction, eraseStoreAction })(Filter);
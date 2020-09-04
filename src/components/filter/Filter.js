import React, { Component } from 'react'
import styles from './filter.module.css'
import Backdrop from '../modal/Backdrop';
import { connect } from 'react-redux';
import { setFilterAction, getSearchAction, eraseStoreAction } from '../../redux/Actions';

class Filter extends Component {

    
    handleOptionChange = changeEvent => {
        let {setFilterAction, modalClosed} = this.props;
        setFilterAction(changeEvent.target.value);
        modalClosed();
    };

    render() {
        let {filterOption, small, show, modalClosed} = this.props
        return (
            <div>
                <div className={small ? styles.containerSmall : styles.container}
                    style={{
                        transform: show ? 'translateX(0)' :
                            'translateX(-100vh)',
                        opacity: show ? 1 : 0
                    }}
                    >
                    <h3>Filters</h3>
                    <label>
                        <input
                            type="radio"
                            name="filter"
                            className="form-check-input"
                            value="characters"
                            checked={filterOption === "characters"}
                            onChange={this.handleOptionChange} /> Characters
                </label>
                    <label>
                        <input
                            type="radio"
                            name="filter"
                            className="form-check-input"
                            value="locations"
                            checked={filterOption === 'locations'}
                            onChange={this.handleOptionChange} /> Locations
                </label>
                    <label>
                        <input
                            type="radio"
                            name="filter"
                            value="episodes"
                            className="form-check-input"
                            checked={filterOption === 'episodes'}
                            onChange={this.handleOptionChange} /> Episodes
                </label>
                </div>
                <Backdrop show={show && small} clicked={modalClosed} />

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
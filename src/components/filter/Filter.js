import React, { Component } from 'react';
import styles from './filter.module.css';
import Backdrop from '../modal/Backdrop';
import { connect } from 'react-redux';
import { setFilterAction,
    updateNameAction,
    updateTypeAction,
    getSearchAction,
    cleanErrorAction
} from '../../redux/Actions';
import PropTypes from 'prop-types';

class Filter extends Component {

    handleOptionChange = changeEvent => {
        const { searchParamsLocations, searchParamsEpisodes, searchParamsCharacters, updateTypeAction, updateNameAction, setFilterAction, modalClosed, cleanErrorAction } = this.props;
        let value = changeEvent.target.value;
        cleanErrorAction();
        setFilterAction(changeEvent.target.value);
        switch (value) {
            case "locations":
                updateNameAction(searchParamsLocations.name);
                updateTypeAction(searchParamsLocations.type);
                break;
            case "characters":
                updateNameAction(searchParamsCharacters.name);
                updateTypeAction(searchParamsCharacters.type);
                break;
            case "episodes":
                updateNameAction(searchParamsEpisodes.name);
                break;
            default:
                break;
        }
        modalClosed();
    };

    render() {
        const { filterOption, small, show, modalClosed } = this.props;
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
        );
    };
};

Filter.propTypes = {
    modalClosed: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    small: PropTypes.bool.isRequired,
};

function mapStateToProps(store) {
    return {
        filterOption: store.search.typeOfSearch,
        searchParamsLocations: store.search.searchParamsLocations,
        searchParamsEpisodes: store.search.searchParamsEpisodes,
        searchParamsCharacters: store.search.searchParamsCharacters,
    };
};

export default connect(mapStateToProps, { updateNameAction, updateTypeAction, setFilterAction, getSearchAction, cleanErrorAction })(Filter);

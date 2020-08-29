import React, { Component } from 'react'
import styles from './search.module.css'
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CancelIcon from '@material-ui/icons/Cancel'
import { connect } from 'react-redux'
import { getSearchAction, updateNameAction, updateTypeAction, eraseStoreAction } from '../../redux/searchDuck'


class Search extends Component {


    nameFieldChanged = (event) => {

        this.props.updateNameAction(event.target.value);
    }

    typeFieldChanged = (event) => {
        this.props.updateTypeAction(event.target.value)
    }

    enterPressed = (event) => {
        if (event.keyCode == 13 && this.props.name.length >2) {
            this.props.eraseStoreAction();
            this.props.getSearchAction();
            
        }
    }

    render() {
        return (
            <div className={styles.container}>

                <div className={styles.container}>

                    <TextField
                        id="standard-full-width"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                        //className="input"
                        label="Name..."
                        onChange={this.nameFieldChanged}
                        onKeyDown={this.enterPressed}
                    />

                    <CancelIcon className={styles.cancel} />
                </div>
                <div className={styles.container}>
                    <TextField

                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                        //className="input"
                        label="Type..."
                        onChange={this.typeFieldChanged}
                        onKeyDown={this.enterPressed}
                    />

                </div>



            </div>
        )

    }


};

function mapStateToProps(store) {
    return {
        name: store.search.searchName,
        type: store.search.searchType
    }
}

export default connect(mapStateToProps, { getSearchAction, updateNameAction, updateTypeAction, eraseStoreAction })(Search)
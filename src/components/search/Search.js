import React, { Component } from 'react';
import styles from './search.module.css';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CancelIcon from '@material-ui/icons/Cancel'
import { connect } from 'react-redux'
import {
    getSearchAction, updateNameAction, updateTypeAction,
    eraseStoreAction, eraseNameFieldAction, eraseTypeFieldAction, setPageAction
} from '../../redux/searchDuck'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            typeInput: ''
        }
    }

    nameFieldChanged = (event) => {
        this.setState({
            nameInput: event.target.value
        })
        this.props.updateNameAction(event.target.value);
    }

    typeFieldChanged = (event) => {
        this.setState({
            typeInput: event.target.value
        })
        this.props.updateTypeAction(event.target.value)
    }

    enterPressed = (event) => {
        if (event.keyCode === 13 && (this.props.name.length > 2 || this.props.type.length > 2)) {
            this.props.eraseStoreAction();
            this.props.setPageAction(1);
            this.props.getSearchAction();

        }
    }

    eraseName = () => {
        this.setState({
            nameInput: ''
        })
        this.props.eraseNameFieldAction();
        if (this.props.type.lenght > 2) {
            this.props.getSearchAction();
        }
        else {
            this.props.eraseStoreAction();
        }
    }

    eraseType = () => {
        this.setState({
            typeInput: ''
        })
        this.props.eraseTypeFieldAction();
        if (this.props.name.length > 2) {
            this.props.getSearchAction();
        }
        else {
            this.props.eraseStoreAction();
        }
    }

    render() {

        let { smallScreen, name, type } = this.props;
        let { nameInput, typeInput } = this.state;

        return (
            <div className={styles.container} style={{
                "flex-flow": smallScreen ? "column" : null,
                "padding-left": smallScreen ? "0" : null
            }}>
                <div className={styles.container}>
                    <TextField
                        fullWidth
                        value={nameInput}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                        label="Name..."
                        onChange={this.nameFieldChanged}
                        onKeyDown={this.enterPressed}
                    />
                    <div className={styles.cancel} style={name ? null : { display: "none" }} onClick={this.eraseName}>
                        <CancelIcon />
                    </div>
                </div>
                <div className={styles.container}>
                    <TextField
                        fullWidth
                        value={typeInput}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                        label="Type..."
                        onChange={this.typeFieldChanged}
                        onKeyDown={this.enterPressed}
                    />
                    <div className={styles.cancel} style={type ? null : { display: "none" }} onClick={this.eraseType}>
                        <CancelIcon />
                    </div>
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

export default connect(mapStateToProps, {
    getSearchAction, updateNameAction, updateTypeAction, eraseStoreAction, eraseNameFieldAction
    , eraseTypeFieldAction, setPageAction
})(Search)
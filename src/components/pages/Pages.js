
import React, { Component } from 'react'
import styles from './pages.module.css'
import Pagination from '@material-ui/lab/Pagination'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPageAction, getSearchAction } from '../../redux/searchDuck';



class Pages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selecterOption: "characters"
        };
    }
    handleChange = (props, value) => {
        console.log(value)
        this.props.setPageAction(value);
        this.props.getSearchAction();
    }

    render() {
        return (
            <div className={styles.container}>
                <Pagination
                    count={this.props.info.pages}

                    shape={'round'}
                    siblingCount={2}
                    boundaryCount={1}
                    page={this.props.page}
                    onChange={this.handleChange}
                    variant="outlined" />


            </div>
        )

    }


}
function mapStateToProps(store) {
    return {
        info: store.search.info,
        page: store.search.searchingPage
    }
}


export default connect(mapStateToProps, { setPageAction, getSearchAction })(Pages)
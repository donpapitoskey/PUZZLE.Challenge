
import React, { Component } from 'react'
import styles from './paginator.module.css'
import Pagination from '@material-ui/lab/Pagination'
import { connect } from 'react-redux'
import { setPageAction, getSearchAction } from '../../redux/searchDuck';

class Paginator extends Component {


    handleChange = (props, value) => {
        console.log(value)
        this.props.setPageAction(value);
        this.props.getSearchAction();
    }

    render() {
        let { info, page } = this.props;

        return (
            <div className={styles.container}>
                <Pagination
                    count={info.pages ? info.pages : 1}

                    shape={'round'}
                    siblingCount={2}
                    boundaryCount={1}
                    page={page}
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

export default connect(mapStateToProps, { setPageAction, getSearchAction })(Paginator)

import React, { Component } from 'react'
import styles from './paginator.module.css'
import Pagination from '@material-ui/lab/Pagination'
import { connect } from 'react-redux'
import { setPageAction, getSearchAction } from '../../redux/Actions';

class Paginator extends Component {


    handleChange = (props, value) => {
        const {setPageAction, getSearchAction} = this.props;
        setPageAction(value);
        getSearchAction();
    }

    render() {
        const { infoChars, infoLoc, infoEp, page, filterOption } = this.props;
        let info = {};
        switch (filterOption) {
            case "locations":
                info = infoLoc;
                break;
            case "episodes":
                info = infoEp;
                break;
            case "characters":
                info = infoChars;
                break;
            default:
                break
        }
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
        infoChars: store.search.infoChars,
        infoLoc: store.search.infoLoc,
        infoEp: store.search.infoEp,
        page: store.search.searchingPage,
        filterOption: store.search.typeOfSearch
    }
}

export default connect(mapStateToProps, { setPageAction, getSearchAction })(Paginator)

import React, { Component } from 'react'
import styles from './pages.module.css'
import Pagination from '@material-ui/lab/Pagination'
import PropTypes from 'prop-types'




export default class Pages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selecterOption: "characters"
        };
    }
    doSomething = (props) => {

    }

    render() {
        return (
            <div className={styles.container}>
                <Pagination 
                count={20} 
                defaultPage={1}
                shape={'round'}
                siblingCount={2}
                 boundaryCount={1}
                 onClick={this.doSomething}
                 variant="outlined" />


            </div>
        )

    }


}
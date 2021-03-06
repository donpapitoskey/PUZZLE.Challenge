import React, { Component } from 'react';
import styles from './home.module.css';
import Filter from '../filter/Filter';
import Search from '../search/Search';
import Lister from '../lister/Lister';
import Paginator from '../paginator/Paginator';
import ListIcon from '@material-ui/icons/List';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            modalFilter: false,
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    modalFilterHandler = (event) => {
        event.preventDefault();
        this.setState({
            modalFilter: !this.state.modalFilter,
        });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        const windowWidth = window !== "undefined" ? window.innerWidth : 0;
        this.setState({ windowWidth });
    }

    currDate = {
        date: new Date().toLocaleDateString(),
    };

    handleClick = () => {
        this.setState({
            modalFilter: !this.state.modalFilter
        })
    };

    render() {
        const { windowWidth, modalFilter } = this.state;
        const isSmallScreen = windowWidth < 768;
        return (
            <div style={{ height: "100vh", width: "100vw" }}>
                <div className={styles.searcher} style={{ height: isSmallScreen ? "20%" : null }}>
                    <div style={{ opacity: isSmallScreen ? 1 : 0 }}>
                        <ListIcon fontSize="large"
                            onClick={this.handleClick} />
                    </div>
                    <Search smallScreen={isSmallScreen} />
                </div>
                <div className={styles.container} >
                    <div className={isSmallScreen ? styles.side_filterClosed : styles.side_filter} >
                        <Filter modalClosed={this.handleClick} show={isSmallScreen ? modalFilter : true} small={isSmallScreen} />
                    </div>
                    <div className={styles.mainBlock} style={{ width: isSmallScreen ? "100%" : null }}>
                        <Lister />
                        <Paginator />
                    </div>
                </div>
                <div className={styles.signature} >
                    <h3 > Juan J. Alarcon</h3>
                    <h3> {this.currDate.date}</h3>
                </div>
            </div>
        );
    };
};

import React, { useState, useEffect, Component } from 'react';
import styles from './home.module.css';
import Filter from '../filter/Filter';
import Search from '../search/Search';
import Lister from '../lister/Lister';
import Pages from '../pages/Pages';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };
        this.wrapperRef = React.createRef();
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    handleClick() {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open');
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({ windowWidth, windowHeight });
    }
    currDate = {
        date: new Date().toLocaleDateString()
    }

    render() {
        const {windowWidth} = this.state;
        
        const isSmallScreen = windowWidth < 768;

        return (
            
            <div style={{ height: "100vh" }}>
                
                <div className={styles.searcher} style={{"flex-direction": isSmallScreen ? "row": null}}>
                    <Search />
                </div>
                <div className={styles.container} >
                    {isSmallScreen ? null : <div className={styles.side_filter} >
                        <Filter />
                    </div>}
                    <div className={styles.mainBlock} style={{width: isSmallScreen ? "100%" : null}}>
                        <Lister />
                        <Pages />
                    </div>
                </div>
                <div className={styles.signature} >
                    <h3 > Juan J. Alarcon</h3>
                    <h3> {this.currDate.date}</h3>
                </div>
            </div>
        )
    }
}


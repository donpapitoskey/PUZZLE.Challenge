import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import Filter from '../filter/Filter';
import Search from '../search/Search';
import Lister from '../lister/Lister';
import Pages from '../pages/Pages';
import store from '../../redux/store';

export default function Home() {

    let currDate = new Date().toLocaleDateString()

    return (
        <div style={{ height: "100vh" }}>
            <div className={styles.searcher}>
                <Search />
            </div>
            <div className={styles.container}>
                <div className={styles.side_filter}>
                    <Filter />
                </div>
                <div className={styles.mainBlock}>
                    <Lister/>
                    <Pages />

                </div>

            </div>
            <div className={styles.signature} >
                <h3> Juan J. Alarcon</h3>
                <h3> {currDate}</h3>
            </div>
        </div>
    )
}


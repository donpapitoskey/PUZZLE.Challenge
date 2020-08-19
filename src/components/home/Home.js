import React, { useState, useEffect } from 'react';
import styles from './home.module.css';

export default function Home() {

    let currDate = new Date().toLocaleDateString()

    return (
        <div style={{height:"100vh"}}>
            <div  className={styles.container}>
                <div className={styles.side_filter}>
                    Filter
                </div>
                <h2> Home page</h2>
                <p>This is a paragraph</p>

            </div>
            <div className={styles.signature} >
                <h3> Juan J. Alarcon</h3>
                <h3> {currDate}</h3>
            </div>
        </div>
    )
}


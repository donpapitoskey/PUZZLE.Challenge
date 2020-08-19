import React, { Component } from 'react'
import styles from './lister.module.css'
import Card from '../card/Card';
import PropTypes from 'prop-types'



export default class Lister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selecterOption: "characters"
        };
    }
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    render() {
        let arr=[1,2,3,5,7,8,9,0,3,3,2,2,3,4,66,6,6,6,6,6,6,6];
        let elements = [];

        for(let element of arr){
            elements.push(<Card value={element}/>)
        }
        return (
            
            <div className={styles.container}>
                {elements}
            </div>

        )

    }


}



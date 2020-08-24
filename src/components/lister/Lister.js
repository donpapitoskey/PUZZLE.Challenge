import React, { Component } from 'react'
import styles from './lister.module.css'
import Card from '../card/Card';
import {connect}from 'react-redux'; //conectar componente con redux




class Lister extends Component {





    render() {
        console.log(this.props.search.typeOfSearch)
        let arr=[1,2,3,5,7,8];
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


};


export default connect()(Lister)  //sacar datos



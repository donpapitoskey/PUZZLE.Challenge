import React, { Component } from 'react'
import styles from './lister.module.css'
import Card from '../card/Card';
import {connect}from 'react-redux'; //conectar componente con redux




class Lister extends Component {




        
    render() {
        
        let elements = [];
        



        for(let element of this.props.episodes){
            elements.push(<Card value={element}/>)
            
        }
        
        return (
            
            <div className={styles.container}>
                {elements}
            </div>

        )

    }


};

function mapStateToProps(store){
    return {
        episodes: store.search.arr
    }
};

export default connect(mapStateToProps)(Lister)  //sacar datos



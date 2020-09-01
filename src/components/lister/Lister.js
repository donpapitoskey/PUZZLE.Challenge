import React, { Component } from 'react'
import styles from './lister.module.css'
import Card from '../card/Card';
import { connect } from 'react-redux'; //conectar componente con redux

class Lister extends Component {

    render() {
        let elements = [];

        for (let element of this.props.res) {
            elements.push(<Card
                value={element}
                name={element.name}
                episode={element.episode}
                created={element.created}
                type={element.type}
                dimension={element.dimension}
                image={element.image} />)
        }

        if (this.props.fetching) {
            return (
                <div className={styles.container}>
                    <h2>Loading ...</h2>
                </div>
            )
        } else if (this.props.err !== "clean") {
            return (
                <div className={styles.container}>
                    <h2>Sorry Morty. Your search could not be achieved :(</h2>
                    <h3>Give it another try with new values :D</h3>
                </div>)
        }
        else {

            return (
                <div className={styles.container}>
                    {elements}
                </div>
            )
        }
    }
};

function mapStateToProps(store) {
    return {
        res: store.search.arr,
        fetching: store.search.fetching,
        err: store.search.error
    }
};

export default connect(mapStateToProps)(Lister)  //sacar datos



import React, { Component } from 'react'
import styles from './lister.module.css'
import Card from '../card/Card';
import { connect } from 'react-redux';

class Lister extends Component {

    render() {
        let { fetching, err, retrievedArray } = this.props;

        if (fetching) {
            return (
                <div className={styles.container}>
                    <h2>Loading ...</h2>
                </div>
            )
        }
        if (err !== "clean") {
            return (
                <div className={styles.containerError}>
                    <h2>Sorry Morty. Your search could not be achieved :(</h2>
                    <h3>Give it another try with new values :D</h3>
                </div>)
        }
        else {

            return (
                <div className={styles.container} >
                    {retrievedArray.map(element => (
                        <Card
                            value={element}
                            name={element.name}
                            episode={element.episode}
                            created={element.created}
                            type={element.type}
                            dimension={element.dimension}
                            image={element.image}
                        />
                    ))}
                </div>
            )
        }
    }
};

function mapStateToProps(store) {
    return {
        retrievedArray: store.search.arr,
        fetching: store.search.fetching,
        err: store.search.error
    }
};

export default connect(mapStateToProps)(Lister)



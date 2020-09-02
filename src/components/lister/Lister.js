import React, { Component } from 'react'
import styles from './lister.module.css'
import Card from '../card/Card';
import { connect } from 'react-redux'; //conectar componente con redux

class Lister extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
        console.log(currentScrollPos)
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };
    
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
                <div className={styles.container} onScroll={this.handleScroll}>
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



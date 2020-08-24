import React, { Component } from "react";
import classes from "./modal.module.css";
import Backdrop from './Backdrop';
import {Auxcard} from '../card/Card';


class modal extends Component {



  render() {
    let arr = [1, 6, 6, 6, 6];
    let elementos = [];

    for (let element of arr) {
      elementos.push(<Auxcard value={element} />)
    }

    return (

      <div className={classes.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)' :
            'translateY(-100vh)',
          opacity: this.props.show ? 1 : 0
        }}>
        <div className={classes.content} >
          <div className={classes.leftSection}>
            infoCharModule
        </div>
          <div className={classes.rightSection}>
            <div>close</div>
            <div>entity name</div>
            <div>data title: data</div>
            <div> Characters</div>
            <div className={classes.aux_container}>
                
                {elementos}
                
            </div>

          </div>

        </div>

        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
      </div>

    );
  }
};


export default modal;
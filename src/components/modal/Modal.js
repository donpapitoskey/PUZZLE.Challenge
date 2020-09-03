import React, { Component } from "react";
import classes from "./modal.module.css";
import Backdrop from './Backdrop';
import Auxcard from '../auxcard/Auxcard';
import { connect } from 'react-redux';

class Modal extends Component {

  render() {

    
    let { typeOfSearch, residents, show, value, modalClosed, chars } = this.props;

    if (typeOfSearch === "locations") {

      return (

        <div className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' :
              'translateY(-100vh)',
            opacity: show ? 1 : 0
          }}>
          <div className={classes.content} >
            <h2>{value.name}</h2>
            {value.type ? <h3>Type: {value.type}</h3> : null}
            <h3>Dimension: {value.dimension}</h3>
            <h3>Residents:</h3>
            <div className={classes.aux_container}>
              {residents.slice(0,5).map(element => (
                <Auxcard value={element} />
              ))}
            </div>
          </div>
          <Backdrop show={show} clicked={modalClosed} />
        </div>

      );
    }
    else if (typeOfSearch === "episodes") {
      return (

        <div className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' :
              'translateY(-100vh)',
            opacity: show ? 1 : 0
          }}>
          <div className={classes.content} >
            <h2>{value.name}</h2>
            <h3> Creation date: {value.created}</h3>
            <h3>{value.episode}</h3>
            <div> Characters</div>
            <div className={classes.aux_container}>
              {chars.slice(0,5).map(element => (
                <Auxcard value = {element} />
              ))}
            </div>
          </div>
          <Backdrop show={show} clicked={modalClosed} />
        </div>
      );
    } else {

      return (

        <div className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' :
              'translateY(-100vh)',
            opacity: show ? 1 : 0
          }}>
          <div className={classes.content} >
            <img src={value.image ? value.image : null} />
            <h2> {value.name}</h2>
            {value.type ? <h3> Type: {value.type}</h3> : null}
            <h3>Genre: {value.gender}</h3>
            <p> Specie: {value.species} </p>
            
          </div>

          <Backdrop show={show} clicked={modalClosed} />
        </div>

      );
    }
  }
};

function mapStateToProps(store) {
  return {
    typeOfSearch: store.search.typeOfSearch
  }
}

export default connect(mapStateToProps)(Modal);
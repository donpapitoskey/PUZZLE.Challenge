import React, { Component } from "react";
import classes from "./modal.module.css";
import Backdrop from './Backdrop';
import Auxcard from '../auxcard/Auxcard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Modal extends Component {

  render() {


    const { dimension, created, gender, species, episode, name, type, image, typeOfSearch, residents, show, modalClosed, chars } = this.props;

    if (typeOfSearch === "locations") {

      return (

        <div className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' :
              'translateY(-100vh)',
            opacity: show ? 1 : 0
          }}>
          <div className={classes.content} >
            <h2>{name}</h2>
            {type ? <h3>Type: {type}</h3> : null}
            <h3>Dimension: {dimension}</h3>
            <h3>Residents:</h3>
            <div className={classes.aux_container}>
              {residents.slice(0, 5).map(element => (
                <Auxcard name={element.name} />
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
            <h2>{name}</h2>
            <h3> Creation date: {created}</h3>
            <h3>{episode}</h3>
            <div> Characters</div>
            <div className={classes.aux_container}>
              {chars.slice(0, 5).map(element => (
                <Auxcard name={element.name} />
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
            <img src={image ? image : null} />
            <h2> {name}</h2>
            {type ? <h3> Type: {type}</h3> : null}
            <h3>Genre: {gender}</h3>
            <p> Specie: {species} </p>

          </div>

          <Backdrop show={show} clicked={modalClosed} />
        </div>

      );
    }
  }
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  dimension: PropTypes.string,
  image: PropTypes.string,
  episode: PropTypes.string,
  created: PropTypes.string,
  gender: PropTypes.string,
  species: PropTypes.string,
  chars: PropTypes.arrayOf(PropTypes.string),
  residents: PropTypes.arrayOf(PropTypes.string)
}

function mapStateToProps(store) {
  return {
    typeOfSearch: store.search.typeOfSearch
  }
}

export default connect(mapStateToProps)(Modal);
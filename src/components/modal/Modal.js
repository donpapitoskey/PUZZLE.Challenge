import React, { Component } from "react";
import classes from "./modal.module.css";
import Backdrop from './Backdrop';
import Auxcard from '../auxcard/Auxcard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Modal extends Component {

  render() {

    const { dimension, created, gender, species, episode, name, type, image, residents, show, modalClosed, chars } = this.props;

      return (
        <div className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' :
              'translateY(-100vh)',
            opacity: show ? 1 : 0
          }}>
          <div className={classes.content} >
            {image != null && <img src={image ? image : null} alt=""/>}
            <h2>{name}</h2>
            {type != null && <h3>Type: {type}</h3>}
            {dimension != null && <h3>Dimension: {dimension}</h3>}
            {created != null && <h3> Creation date: {created}</h3>}
            {episode != null && <h3>Episode: {episode}</h3>}
            {gender != null && <h3>Gender: {gender}</h3>}
            {species != null && <p> Specie: {species} </p>}
            {residents != null && 
            <div>
              <h3>Residents:</h3>
              <div className={classes.aux_container}>
                {residents.slice(0, 5).map(element => (
                  <Auxcard name={element.name} />
                    )
                  )
                }
              </div>
            </div>
            }
            {chars != null && 
            <div>
              <h3>Characters:</h3>
              <div className={classes.aux_container}>
                {chars.slice(0, 5).map(element => (
                  <Auxcard name={element.name} />
                    )
                  )
                }
              </div>
            </div>
            }
          </div>
          <Backdrop show={show} clicked={modalClosed} />
        </div>
      );
  };
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
  residents: PropTypes.arrayOf(PropTypes.string),
};

function mapStateToProps(store) {
  return {
    typeOfSearch: store.search.typeOfSearch,
  };
};

export default connect(mapStateToProps)(Modal);
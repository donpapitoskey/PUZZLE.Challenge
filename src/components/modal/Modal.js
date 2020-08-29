import React, { Component } from "react";
import classes from "./modal.module.css";
import Backdrop from './Backdrop';
import { Auxcard } from '../card/Card';
import { connect } from 'react-redux';

class Modal extends Component {



  render() {
     
    let elementos = [];

    if (this.props.typeOfSearch == "locations") {


      for (let element of this.props.residents.slice(0, 5)) {
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
  
  
            <h2>{this.props.value.name}</h2>
            <h3> Type: {this.props.value.type}</h3>
            <h3>Dimension: {this.props.value.dimension}</h3>
            <div> Residents:</div>
            <div className={classes.aux_container}>
  
              {elementos}
  
            </div>
  
  
  
          </div>
  
          <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        </div>
  
      );
    }
    else if (this.props.typeOfSearch == "episodes") {
      for (let element of this.props.chars.slice(0, 5)) {
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
  
  
            <h2>{this.props.value.name}</h2>
            <h3> Creation date: {this.props.value.created}</h3>
            <h3>{this.props.value.episode}</h3>
            <div> Characters</div>
            <div className={classes.aux_container}>
  
              {elementos}
  
            </div>
  
  
  
          </div>
  
          <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        </div>
  
      );
    }else{


    return (

      <div className={classes.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)' :
            'translateY(-100vh)',
          opacity: this.props.show ? 1 : 0
        }}>
        <div className={classes.content} >

        <img src={this.props.value.image? this.props.value.image : null} width="400px" />
          <h2> {this.props.value.name}</h2>
          <h3> Type: {this.props.value.type}</h3>
          <h3>Genre: {this.props.value.gender}</h3>
      <div> Specie: {this.props.value.species} </div>
          <div className={classes.aux_container}>

            {elementos}

          </div>



        </div>

        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
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
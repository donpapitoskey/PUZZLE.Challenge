import React, { useState } from "react";
import classes from "./modal.module.css";
import Backdrop from './Backdrop';



const modal = props => {
  return (
    
      <div className = {classes.Modal}
      style ={{ 
        transform:props.show ? 'translateY(0)' :
        'translateY(-100vh)',
        opacity:props.show ? 1:0
      }}>
        <div className={classes.content} >
        {props.children}
        </div>
          
          <Backdrop show={props.show} clicked = {props.modalClosed} />
      </div>
      
  );
};


export default modal;
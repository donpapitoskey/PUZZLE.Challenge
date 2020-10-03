import React from 'react';
import classes from './backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = ({show,clicked}) => (show && <div className={classes.Backdrop} onClick={clicked} ></div>);

Backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired,
};

export default Backdrop;
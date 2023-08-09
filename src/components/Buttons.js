import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Buttons = ({ number }) => {
  if (number === '\u00F7' || number === 'x' || number === '-' || number === '+' || number === '=') {
    return <div className="btn orange">{number}</div>;
  } if (number === '0') {
    return <div className="btn zero">{number}</div>;
  }
  return <div className="btn">{number}</div>;
};

Buttons.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Buttons;

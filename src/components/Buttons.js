import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Buttons = ({ number, handleEvent }) => {
  if (number === '\u00F7' || number === 'x' || number === '-' || number === '+' || number === '=') {
    return <div onClick={handleEvent} onKeyDown={handleEvent} role="presentation" className="btn orange">{number}</div>;
  } if (number === '0') {
    return <div onClick={handleEvent} onKeyDown={handleEvent} role="presentation" className="btn zero">{number}</div>;
  }
  return <div onClick={handleEvent} onKeyDown={handleEvent} role="presentation" className="btn">{number}</div>;
};

Buttons.propTypes = {
  number: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
};

export default Buttons;

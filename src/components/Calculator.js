import React from 'react';
import './styles.css';
import Buttons from './Buttons';

const numbers = ['AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calc = () => (
  <div className="calculator">
    <div className="result">0</div>
    {numbers.map((number) => <Buttons number={number} key={number} />)}
  </div>
);

export default Calc;

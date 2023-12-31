import React, { useState } from 'react';
import './styles.css';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const numbers = ['AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calc = () => {
  const [math, setMath] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = math;

  const handleEvent = (e) => {
    const value = e.target.textContent;
    setMath(calculate(math, value));
  };
  return (
    <>
      <h2 className="math-header">Lets do some math</h2>
      <div className="calculator">
        <div className="result">{next || total || operation || 0 }</div>
        {/* eslint-disable max-len */}
        {numbers.map((number) => <Buttons number={number} key={number} handleEvent={handleEvent} />)}
        {/* eslint-disable max-len */}
      </div>
    </>
  );
};

export default Calc;

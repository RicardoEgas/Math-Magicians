import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calc from './components/Calculator';
import Quote from './components/Quotes';
import Nav from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calc />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;

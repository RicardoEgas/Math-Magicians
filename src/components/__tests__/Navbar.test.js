import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('renders correctly', () => {
    const { tree } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});

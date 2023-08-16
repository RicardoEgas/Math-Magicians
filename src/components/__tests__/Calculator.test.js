import React from 'react';
import { render } from '@testing-library/react';
import Calc from '../Calculator';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const { tree } = render(<Calc />);
    expect(tree).toMatchSnapshot();
  });
});

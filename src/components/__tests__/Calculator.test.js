import React from 'react';
import renderer from 'react-test-renderer';
import Calc from '../Calculator';

describe('Home component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Calc />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

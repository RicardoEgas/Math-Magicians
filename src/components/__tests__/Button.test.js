import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from '../Buttons'; // Adjust the path

describe('Buttons component', () => {
  it('should render with the provided number and handle event', () => {
    const handleEventMock = jest.fn();

    const tree = renderer
      .create(<Buttons number="1" handleEvent={handleEventMock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Add more test cases as needed
});

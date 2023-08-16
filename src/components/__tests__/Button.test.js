import React from 'react';
import { render } from "@testing-library/react";
import Buttons from '../Buttons'; // Adjust the path

describe('Buttons component', () => {
  it('should render with the provided number and handle event', () => {
    const handleEventMock = jest.fn();

    const { tree } = render(<Buttons number="1" handleEvent={handleEventMock} />);
    expect(tree).toMatchSnapshot();
  });

  // Add more test cases as needed
});

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Quotes from '../Quotes';

describe('Quote component', () => {
  it('should match the snapshot', async () => {
    const { container } = render(<Quotes />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});

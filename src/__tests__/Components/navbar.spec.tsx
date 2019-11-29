import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navbar from '../../Components/Navbar';

afterEach(cleanup);

describe('<Navbar />', () => {
  it('should contains the Navbar', () => {
    const { getByText } = render(<Navbar location="/" />);
    getByText('Bands');
    getByText('Albums');
  });

  it('should render the component correctly', () => {
    const tree = render(<Navbar location="/" />);
    expect(tree).toMatchSnapshot();
  });
});

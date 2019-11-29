import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ErrorComponent from '../../Components/ErrorComponent';

afterEach(cleanup);

describe('<ErrorComponent />', () => {
  it('should contains the error text', () => {
    const { getByText } = render(<ErrorComponent message="Your test Failed" />);
    getByText('Your test Failed');
  });

  it('should render the component correctly', () => {
    const tree = render(<ErrorComponent message="Your test Failed" />);
    expect(tree).toMatchSnapshot();
  });
});

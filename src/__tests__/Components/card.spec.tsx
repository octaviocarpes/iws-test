import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from '../../Components/Card';

afterEach(cleanup);

describe('<Card />', () => {
  it('should contains the card and its children', () => {
    const { getByText } = render(
      <Card>
        <h1>Hello</h1>
      </Card>,
    );
    getByText('Hello');
  });

  it('should render the component correctly', () => {
    const tree = render(
      <Card>
        <h1>Hello</h1>
      </Card>,
    );
    expect(tree).toMatchSnapshot();
  });
});

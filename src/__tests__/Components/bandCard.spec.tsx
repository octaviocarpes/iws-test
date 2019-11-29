import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BandCard from '../../Components/BandCard';
import { Band } from '../../Models/Band';

const band: Band = {
  name: 'Band',
  id: '12345',
  image: 'image',
  albums: [],
  biography: 'Biography',
  genre: 'genre',
  numPlays: 10000,
};

afterEach(cleanup);

describe('<BandCard />', () => {
  it('should contains the bands name and genre', () => {
    const { getByText } = render(<BandCard band={band} />);
    getByText('Band');
    getByText('genre');
  });

  it('should render the component correctly', () => {
    const tree = render(<BandCard band={band} />);
    expect(tree).toMatchSnapshot();
  });
});

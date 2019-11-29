import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AlbumCard from '../../Components/AlbumCard';
import { Album } from '../../Models/Album';

const album: Album = {
  name: 'Album',
  band: 'Band',
  id: '12345',
  image: 'image',
  releasedDate: new Date(),
  tracks: [
    {
      id: '',
      duration: 180,
      name: 'Tack',
    },
  ],
};

afterEach(cleanup);

describe('AlbumCard', () => {
  it('should contains name', () => {
    const { getByText } = render(<AlbumCard album={album} />);
    getByText('Album');
  });
});

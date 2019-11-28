import { createContext } from 'react';
import { AlbumStore } from '../Stores/Albums.store';

export const AlbumContext = createContext(new AlbumStore());

import { createContext } from 'react';
import { BandStore } from '../Stores/Bands.store';

export const BandContext = createContext(new BandStore());

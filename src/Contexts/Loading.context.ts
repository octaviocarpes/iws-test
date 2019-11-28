import { createContext } from 'react';
import { LoadingStore } from '../Stores/Loading.store';

export const LoadingContext = createContext(new LoadingStore());

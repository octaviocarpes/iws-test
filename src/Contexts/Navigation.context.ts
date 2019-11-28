import { createContext } from 'react';
import { NavigationStore } from '../Stores/Navigation.store';

export const NavigationContext = createContext(new NavigationStore());

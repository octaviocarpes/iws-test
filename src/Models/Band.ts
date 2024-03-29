import { Album } from './Album';

export interface Band {
  name: string;
  image: string;
  genre: string;
  biography: string;
  numPlays: number;
  albums: string[] | Album[];
  id: string;
}

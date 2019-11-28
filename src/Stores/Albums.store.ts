import { observable } from 'mobx';
import { Album } from '../Models/Album';

export class AlbumStore {
  @observable public albums: Album[] = [];

  public setAlbums(albums: Album[]): void {
    this.albums = albums;
  }

  public filterAlbumsByName(albumName: string): Album[] {
    return this.albums.filter(album => album.name.startsWith(albumName));
  }
}

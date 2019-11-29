import { observable } from 'mobx';
import { Album } from '../Models/Album';

export class AlbumStore {
  @observable public albums: Album[] = [];

  public setAlbums(albums: Album[]): void {
    this.albums = albums;
  }

  public appendAlbums(newAlbums: Album[]): void {
    console.log('append albums');
    this.albums = [...this.albums, ...newAlbums];
  }

  private buildAlbumName(name: string): string {
    return `${name.charAt(0).toUpperCase()}${name.substr(1, name.length)}`;
  }

  public filterAlbumsByName(albumName: string): Album[] {
    return this.albums.filter(album => album.name.startsWith(this.buildAlbumName(albumName)));
  }
}

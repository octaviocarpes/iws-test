import { AlbumsService } from '../Services';
import { Album } from '../Models';

export class AlbumsController {
  private albumsService: AlbumsService;
  private albums: Album[];
  private constructor() {
    this.albumsService = new AlbumsService();
    this.albums = [];
  }

  public static instance: AlbumsController;
  public static getInstance(): AlbumsController {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new AlbumsController();
    }
    return this.instance;
  }

  public async getAlbums(): Promise<Album[]> {
    if (!this.albums.length) {
      try {
        const { data } = await this.albumsService.getAlbums();
        this.albums = data;
        return this.albums;
      } catch (error) {
        return error;
      }
    } else return this.albums;
  }

  public async getAlbumById(id: string): Promise<Album[]> {
    try {
      const { data } = await this.albumsService.getAlbums();
      const albums = data.filter((album: Album) => album.id === id).reduce((album: Album) => album);
      return albums;
    } catch (error) {
      return error;
    }
  }
}

import { AlbumsService } from '../Services';
import { Album } from '../Models';

interface Section {
  from: number;
  to: number;
}
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

  private getAlbumSection(page: number): Section {
    if (page === 1) {
      return { from: 0, to: 20 };
    } else {
      const { to } = this.getAlbumSection(page - 1);
      const section: Section = {
        from: to,
        to: 20 * page,
      };
      return section;
    }
  }

  private pageAlbums(page: number, albums: Album[]): Album[] {
    const { from, to } = this.getAlbumSection(page);
    return albums.slice(from, to);
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

  public async getAlbumsByPage(page: string): Promise<Album[]> {
    try {
      const { data } = await this.albumsService.getAlbums();
      return this.pageAlbums(parseInt(page), data);
    } catch (error) {
      return error;
    }
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

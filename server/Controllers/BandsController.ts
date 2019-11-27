import { BandsService } from '../Services';
import { Band, Album } from '../Models';
import { AlbumsController } from './AlbumsController';

export class BandsController {
  private bandsService: BandsService;
  private constructor() {
    this.bandsService = new BandsService();
  }

  public static instance: BandsController;
  public static getInstance(): BandsController {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new BandsController();
    }
    return this.instance;
  }

  public async getBands(): Promise<Band[]> {
    try {
      const { data } = await this.bandsService.getBands();
      return data;
    } catch (error) {
      return error;
    }
  }

  public async getBandById(id: string): Promise<Band> {
    try {
      const { data } = await this.bandsService.getBandById(id);
      return data;
    } catch (error) {
      return error;
    }
  }

  public async getBandAlbums(id: string): Promise<Album[]> {
    try {
      const band = await this.getBandById(id);
      const albums = await AlbumsController.getInstance().getAlbums();
      const bandAlbums: Album[] = [];

      if (albums !== undefined) {
        for (let i = 0; i < band.albums.length; i++) {
          const album: Album | undefined = albums.find(album => album.id === band.albums[i]);
          bandAlbums.push(album as Album);
        }
        return bandAlbums;
      } else return albums;
    } catch (error) {
      return error;
    }
  }
}

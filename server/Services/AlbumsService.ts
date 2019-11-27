import axios, { AxiosResponse } from 'axios';

export class AlbumsService {
  private url = 'https://iws-recruiting-bands.herokuapp.com/api/albums';

  public getAlbums(): Promise<AxiosResponse> {
    return axios.get(this.url);
  }
}

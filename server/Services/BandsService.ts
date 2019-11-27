import axios, { AxiosResponse } from 'axios';

export class BandsService {
  private url = 'https://iws-recruiting-bands.herokuapp.com/api/bands';

  public getBands(): Promise<AxiosResponse> {
    return axios.get(this.url);
  }

  public getBandById(id: string): Promise<AxiosResponse> {
    return axios.get(`${this.url}/${id}`);
  }
}

import axios, { AxiosResponse } from 'axios';

const url = 'http://localhost:8080/api/albums';

export const getAlbums = (): Promise<AxiosResponse> => {
  return axios.get(url);
};

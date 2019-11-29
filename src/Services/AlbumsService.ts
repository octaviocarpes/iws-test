import axios, { AxiosResponse } from 'axios';

const url = 'http://localhost:8080/api/albums';

export const getAlbums = (): Promise<AxiosResponse> => {
  return axios.get(url);
};

export const getAlbumById = (id: string): Promise<AxiosResponse> => {
  return axios.get(`${url}/${id}`);
};

export const getAlbumsByPage = (page: number): Promise<AxiosResponse> => {
  return axios.get(`${url}/page/${page}`);
};

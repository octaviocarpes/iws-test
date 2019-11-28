import axios, { AxiosResponse } from 'axios';

const url = 'http://localhost:8080/api/bands';

export const getBands = (): Promise<AxiosResponse> => {
  return axios.get(url);
};

export const getBandById = (id: string): Promise<AxiosResponse> => {
  return axios.get(`${url}/${id}`);
};

export const getBandAlbums = (id: string): Promise<AxiosResponse> => {
  return axios.get(`${url}/albums/${id}`);
};

import axios, { AxiosResponse } from 'axios';

const url = 'http://localhost:8080/api/bands';

export const getBands = (): Promise<AxiosResponse> => {
  return axios.get(url);
};

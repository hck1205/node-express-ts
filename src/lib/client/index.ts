import axios, { AxiosInstance, AxiosResponse } from 'axios';

const API_BASE_URL = {
  google: 'https://www.googleapis.com/youtube/v3',
  local: '/'
};

export class Client {
  private axios: AxiosInstance;

  constructor(dest: 'google' | 'local') {
    this.axios = axios.create({
      baseURL: API_BASE_URL[dest],
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  get<T>(path: string, payload = null as any) {
    return this.axios.get<T>(path, payload).then((response: AxiosResponse) => response);
  }

  post(path: string, payload: any) {
    return this.axios.post(path, payload).then((response: AxiosResponse) => response);
  }

  put(path: string, payload: any) {
    return this.axios.put(path, payload).then((result: AxiosResponse) => result);
  }

  delete(path: string, payload = null as any) {
    return this.axios.delete(path, payload).then((result: AxiosResponse) => result);
  }
}

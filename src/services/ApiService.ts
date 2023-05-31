import axios, { AxiosInstance, AxiosResponse } from 'axios';

class ApiService {
  protected readonly httpService: AxiosInstance;

  constructor() {
    this.httpService = axios.create({ baseURL: '/api' });
  }

  private getQueryString = (params?:  Record<string, string | number>): string => {
    if (!params || !Object.keys(params).length) {
      return '';
    }

    return `?${Object.entries(params)
      .map(([k, v]) => `${k}=${v}`)
      .join('&')}`;
  };

  get = async <T>(path: string, queryParams?:  Record<string, string | number>): Promise<AxiosResponse<T, any>> => {
    const pathWithQuery = path + this.getQueryString(queryParams);

    return await this.httpService.get<string, AxiosResponse<T>>(pathWithQuery);
  };
}

export const apiService = new ApiService();

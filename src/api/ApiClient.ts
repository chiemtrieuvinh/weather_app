import axios, { AxiosResponse } from 'axios';

const domainUrl = 'https://www.metaweather.com';

export default class ApiClient {
  /**
   * GET function
   *
   * @param url
   * @param params
   */
  static async get(
    url: string, params: object, query?: undefined|{[key: string]: string}|string,
  ): Promise<AxiosResponse> {
    let requestUrl = query ? `${url}?${JSON.stringify(query)}` : url;
    if (typeof query === 'string') {
      requestUrl = `${url}?${query}`;
    }
    const response = await axios.get(domainUrl + requestUrl, {
      params,
      data: {},
    });

    return response;
  }
}

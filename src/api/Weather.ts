import { ISearchLocation } from 'types/SearchLocationType';
import { IWeatherLocationDay } from 'types/WeatherLocationDayType';
import ApiClient from './ApiClient';

export const getLocationSearch = async (
  queryLocation:string,
): Promise<Array<ISearchLocation>> => {
  const params = {};
  const query = {
    queryLocation,
  };
  const response = await ApiClient.get('/api/location/search/', query, params);
  return response.data;
};

export const getMetaWeatherLocationDay = async (
  locationId: string,
  targetDate:string,
): Promise<Array<IWeatherLocationDay>> => {
  const params = {
    targetDate,
  };
  const response = await ApiClient.get(`/api/location/${locationId}`, params);
  return response.data;
};

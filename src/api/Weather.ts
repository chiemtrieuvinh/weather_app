import { ISearchLocation } from 'types/SearchLocationType';
import { IWeatherLocationDay } from 'types/WeatherLocationDayType';
import ApiClient from './ApiClient';

export const getLocationSearch = async (
  queryLocation:string = 'Ho Chi Minh City',
): Promise<Array<ISearchLocation>> => {
  const query = {
    location: queryLocation,
  };
  const response = await ApiClient.get('http://localhost:3030/api/location/search/', query);
  return response.data;
};

export const getMetaWeatherLocationDay = async (
  locationId: number,
): Promise<IWeatherLocationDay> => {
  const params = {
  };
  const response = await ApiClient.get(`http://localhost:3030/api/location/${locationId}/`, params);
  return response.data;
};

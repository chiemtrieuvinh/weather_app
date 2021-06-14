import { IWeatherLocationDay } from 'types/WeatherLocationDayType';
import actionTypes from './actionTypes';

export const fetch = (response: IWeatherLocationDay) => ({ type: actionTypes.FETCH, response });

export type Actions =
| ReturnType<typeof fetch>

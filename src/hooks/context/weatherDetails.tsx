import React, {
  createContext, useContext, useState, useMemo, useEffect, useCallback, useReducer,
} from 'react';
import {
  // getLocationSearch,
  getMetaWeatherLocationDay,
} from 'api/Weather';
import { fetch } from 'modules/actions';
import { initialState, reducer } from 'modules/reducer';

// @ts-ignore
const WeatherDetails = createContext();

export const useWeatherDetails = () => {
  const context: any = useContext(WeatherDetails);
  if (!context) {
    throw new Error('useWeatherDetails must be used within a WeatherDetailProvider');
  }
  return context;
};

export const WeatherDetailProvider: React.FC<any> = (props: any) => {
  const [metaWeatherState, dispatch] = useReducer(reducer, initialState);
  const mockId = '1252431';
  const [weatherInfo, setWeatherInfo] = useState<any>({});
  const fetchData = useCallback(async (locationId) => {
    try {
      const response = await getMetaWeatherLocationDay(locationId);
      dispatch(fetch(response));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData(mockId);
  }, [fetchData]);

  useEffect(() => {
    setWeatherInfo(metaWeatherState);
  }, [metaWeatherState]);
  const value = useMemo(() => {
    const updateWeatherDetails = (locationId: string) => {
      fetchData(locationId);
    };
    return [{ ...weatherInfo }, updateWeatherDetails];
  }, [weatherInfo, fetchData]);
  return <WeatherDetails.Provider value={value} {...props} />;
};

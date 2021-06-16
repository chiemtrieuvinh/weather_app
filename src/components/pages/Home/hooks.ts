import {
  useReducer, useState, useEffect, useCallback,
} from 'react';
import {
  // getLocationSearch,
  getMetaWeatherLocationDay,
} from 'api/Weather';
import { fetch } from 'modules/actions';
import { initialState, reducer } from 'modules/reducer';

const UseMetaWeather = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [metaWeatherState, dispatch] = useReducer(reducer, initialState);
  const mockId = '44418';
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getMetaWeatherLocationDay(mockId);
      dispatch(fetch(response));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return {
    loading,
    setLoading,
    metaWeatherState,
  };
};

export default UseMetaWeather;

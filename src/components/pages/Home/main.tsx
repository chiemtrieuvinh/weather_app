import React, { useState, useCallback, useEffect } from 'react';
import SearchInput from 'components/molecules/SearchInput/main';
import { StyleProps } from 'types/StyleProps';
import WeatherCard from 'components/molecules/WeatherCard/main';
import { ConsolidatedWeather } from 'types/WeatherLocationDayType';
import { ISearchLocation } from 'types/SearchLocationType';
import Text from 'components/atoms/Text/main';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useWeatherDetails } from 'hooks/context/weatherDetails';
import { getLocationSearch } from 'api/Weather';

const Home: React.FC<{ styleProps?: StyleProps }> = ({ styleProps }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherInfo, updateWeatherDetails] = useWeatherDetails();
  const [searchValue, setSearchValue] = useState<string>('Ho Chi Minh City');
  const [locationValue, setLocationValue] = useState<ISearchLocation[]>([{
    latt_long: '10.759180,106.662498',
    location_type: 'City',
    title: 'Ho Chi Minh City',
    woeid: 1252431,
  }]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const fetchSearchQuery = useCallback(async (value: string) => {
    setLoading(true);
    try {
      const response = await getLocationSearch(value);
      setLocationValue(response);
      if (response) {
        await updateWeatherDetails(response[0] && response[0].woeid);
        setLoading(false);
      }
    } catch (error) {
      // setLoading(false);
      throw new Error();
    }
  }, [searchValue, updateWeatherDetails]);

  useEffect(() => {
    fetchSearchQuery(searchValue);
  }, []);
  return (
    <Container className="h-100">
      <Row className="row mx-auto">
        <Row className="row mx-auto">
          <Col className="text-center">
            <h1
              className="xl-text otomano-font"
              style={{
                letterSpacing: 4, fontWeight: 500, marginBottom: 20, color: 'white',
              }}
            >
              5 DAY FORECAST
            </h1>
          </Col>
        </Row>
        <Row className="row mx-auto" style={{ width: '40%' }}>
          <Col>
            <SearchInput id="searchInput" name="searchValue" value={searchValue} onChange={handleChange} callBack={() => fetchSearchQuery(searchValue)} />
          </Col>
        </Row>
      </Row>
      <Row className="row mx-auto d-flex align-items-center justify-content-center" style={{ height: '40%' }}>
        <Col>
          <Text className="lg-text otomano-font text-center" color="white" styleProps={{ letterSpacing: 4, fontWeight: 500, marginBottom: 20 }}>
            Location:
            {' '}
            123
            {/* {locationValue && locationValue[0] && locationValue[0].title || 'Location not found'} */}
          </Text>
        </Col>
      </Row>
      <Row className="row mx-auto w-95 pb-2 mt-1">
        {
          !loading
            ? weatherInfo && weatherInfo.consolidated_weather && weatherInfo.consolidated_weather.map((item: ConsolidatedWeather) => (
              <Col className="d-flex align-items-end justify-content-center w-95 pb-sm-1">
                <div className="p-4 shadowEffect">
                  <WeatherCard
                    day={item.applicable_date}
                    weatherState={item.weather_state_abbr}
                    weatherStateName={item.weather_state_name}
                    minTemp={Math.round(item.min_temp)}
                    maxTemp={Math.round(item.max_temp)}
                  />
                </div>
              </Col>
            )) : (
              <Col>
                {' '}
                <Text className="md-text otomano-font text-center" color="white" styleProps={{ letterSpacing: 4, fontWeight: 500, marginBottom: 20 }}>Loading ...</Text>
              </Col>
            )
        }
      </Row>
    </Container>
  );
};

export default Home;

import React, { useState } from 'react';
import SearchInput from 'components/molecules/SearchInput/main';
import { StyleProps } from 'types/StyleProps';
import WeatherCard from 'components/molecules/WeatherCard/main';
import FlexBox from 'components/atoms/FlexBox/main';
import FlexBoxItem from 'components/atoms/FlexBoxItem/main';
import { ConsolidatedWeather } from 'types/WeatherLocationDayType';
import Text from 'components/atoms/Text/main';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import UseMetaWeather from './hooks';

const Home: React.FC<{ styleProps?: StyleProps }> = ({ styleProps = {} }) => {
  const { loading, metaWeatherState, setLoading } = UseMetaWeather();
  console.log(metaWeatherState, 'check weather');
  const [searchValue, setSearchValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container className="h-100">
      <Row className="row mx-auto">
        <Row className="row mx-auto">
          <Col className="text-center">
            <Text className="xl-text otomano-font" color="white" styleProps={{ letterSpacing: 4, fontWeight: 500, marginBottom: 20 }}>5 DAY FORECAST</Text>
          </Col>
        </Row>
        <Row className="row mx-auto">
          <Col>
            <SearchInput id="searchInput" name="searchValue" value={searchValue} onChange={handleChange} />
          </Col>
        </Row>
      </Row>
      <Row className="row mx-auto d-flex align-items-center justify-content-center" style={{ height: '40%' }}>
        <Col>
          <Text className="lg-text otomano-font text-center" color="white" styleProps={{ letterSpacing: 4, fontWeight: 500, marginBottom: 20 }}>
            Location:
            {' '}
            {metaWeatherState?.parent?.title}
          </Text>
        </Col>
      </Row>
      <Row className="row mx-auto w-95 pb-2 mt-1">
        {
          metaWeatherState && metaWeatherState.consolidated_weather && metaWeatherState.consolidated_weather.map((item: ConsolidatedWeather) => (
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
          ))
        }
      </Row>
    </Container>
  );
};

export default Home;

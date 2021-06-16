import React, { useState } from 'react';
import SearchInput from 'components/molecules/SearchInput/main';
import { StyleProps } from 'types/StyleProps';
import WeatherCard from 'components/molecules/WeatherCard/main';
import FlexBox from 'components/atoms/FlexBox/main';
import FlexBoxItem from 'components/atoms/FlexBoxItem/main';
import { ConsolidatedWeather } from 'types/WeatherLocationDayType';
import Text from 'components/atoms/Text/main';
import UseMetaWeather from './hooks';

const Home: React.FC<{ styleProps?: StyleProps }> = ({ styleProps = {} }) => {
  const { loading, metaWeatherState, setLoading } = UseMetaWeather();
  console.log(metaWeatherState, 'check weather');
  const [searchValue, setSearchValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="Home" style={{ ...styleProps }}>
      <div className="ContentWrapper">
        <div className="WhiteLayer" />
        <div className="ContentItem">
          <div>
            <h1>5 DAY FORECAST</h1>
            <SearchInput id="home_search_input" name="searchValue" value={searchValue} onChange={handleChange} styleProps={{ marginTop: 20 }} />
            <FlexBox styleProps={{ marginTop: 20 }}>
              {
                metaWeatherState && metaWeatherState.consolidated_weather && metaWeatherState.consolidated_weather.map((item: ConsolidatedWeather) => (
                  <FlexBoxItem>
                    <WeatherCard
                      day={item.applicable_date}
                      weatherState={item.weather_state_abbr}
                      weatherStateName={item.weather_state_name}
                      minTemp={Math.round(item.min_temp)}
                      maxTemp={Math.round(item.max_temp)}
                    />
                  </FlexBoxItem>
                ))
              }
            </FlexBox>
            <FlexBox styleProps={{ marginTop: 20 }}>
              <Text size={36} styleProps={{ width: '100%', textAlign: 'center' }}>
                {`${metaWeatherState && metaWeatherState.parent && metaWeatherState.parent.title} - ${metaWeatherState && metaWeatherState.title}`}
              </Text>
            </FlexBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

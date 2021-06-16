import React from 'react';
import FlexBox from 'components/atoms/FlexBox/main';
import { StyleProps } from 'types/StyleProps';
import Image from 'components/atoms/Image/main';
import moment from 'moment';
import convertDay from 'utilities/convertDays';

type WeatherCardProps = {
  day: string,
  weatherState: string,
  weatherStateName: string,
  minTemp: number,
  maxTemp: number,
  styleProps?: StyleProps
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  day, minTemp, maxTemp, weatherState, weatherStateName, styleProps = {},
}) => {
  const getImageUrl = weatherState ? `https://www.metaweather.com/static/img/weather/png/64/${weatherState}.png` : '';
  return (
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
      <div>{convertDay(moment(day).isoWeekday())}</div>
      <Image src={getImageUrl} alt={weatherStateName} styleProps={{ width: 100, height: 100 }} />
      <h1>{`${maxTemp}°`}</h1>
      <div>{`${minTemp}°`}</div>
    </FlexBox>
  );
};
export default WeatherCard;

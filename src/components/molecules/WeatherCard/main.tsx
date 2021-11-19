import React from 'react';
import FlexBox from 'components/atoms/FlexBox/main';
import { StyleProps } from 'types/StyleProps';
import Image from 'components/atoms/Image/main';
import moment from 'moment';
import convertDay from 'utilities/convertDays';
import Text from 'components/atoms/Text/main';
import Col from 'react-bootstrap/Col';

type WeatherCardProps = {
  day: string,
  weatherState: string,
  weatherStateName: string,
  minTemp: number,
  maxTemp: number,
  styleProps?: StyleProps
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  day, minTemp, maxTemp, weatherState, weatherStateName, styleProps,
}) => {
  const getImageUrl = weatherState ? `https://www.metaweather.com/static/img/weather/png/64/${weatherState}.png` : '';
  return (
    <div className="d-flex flex-md-column justify-content-center align-items-center flex-sm-row mt-4">
      <Text className="md-text" color="white">{convertDay(moment(day).isoWeekday())}</Text>
      <Image src={getImageUrl} alt={weatherStateName} styleProps={{ width: 100, height: 100 }} />
      <Text className="lg-text" color="white" styleProps={{ fontWeight: 700 }}>{`${maxTemp}°`}</Text>
      <Text className="standard-text" color="white">{`${minTemp}°`}</Text>
    </div>
  );
};
export default WeatherCard;

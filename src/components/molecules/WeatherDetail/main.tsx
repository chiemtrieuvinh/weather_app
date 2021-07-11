import React from 'react';
import FlexBox from 'components/atoms/FlexBox/main';
import { StyleProps } from 'types/StyleProps';
import Image from 'components/atoms/Image/main';
import moment from 'moment';
import convertDay from 'utilities/convertDays';
import Text from 'components/atoms/Text/main';

type WeatherDetailProps = {
  day: string,
  weatherState: string,
  weatherStateName: string,
  minTemp: number,
  maxTemp: number,
  styleProps?: StyleProps
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({
  day, minTemp, maxTemp, weatherState, weatherStateName, styleProps = {},
}) => {
  const getImageUrl = weatherState ? `https://www.metaweather.com/static/img/weather/png/64/${weatherState}.png` : '';
  return (
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
      <Text size={36} color="white" styleProps={{ width: '100%', textAlign: 'center' }}>{convertDay(moment(day).isoWeekday())}</Text>
      <Image src={getImageUrl} alt={weatherStateName} styleProps={{ width: 100, height: 100 }} />
      <Text size={54} color="white" styleProps={{ width: '100%', textAlign: 'center', fontWeight: 700 }}>{`${maxTemp}°`}</Text>
      <Text size={24} color="white" styleProps={{ width: '100%', textAlign: 'center' }}>{`${minTemp}°`}</Text>
    </FlexBox>
  );
};
export default WeatherDetail;

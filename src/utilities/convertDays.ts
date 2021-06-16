import { TDay } from 'types/DayType';

const dayList = [
  {
    value: 1,
    name: 'Mon',
  },
  {
    value: 2,
    name: 'Tue',
  },
  {
    value: 3,
    name: 'Wed',
  },
  {
    value: 4,
    name: 'Thu',
  },
  {
    value: 5,
    name: 'Fri',
  },
  {
    value: 6,
    name: 'Sat',
  },
  {
    value: 7,
    name: 'Sun',
  },
];

const convertDay = (day:number):string => {
  const dayName:TDay | undefined = dayList.find((item:TDay) => item.value === day);
  return dayName ? dayName.name : '';
};
export default convertDay;

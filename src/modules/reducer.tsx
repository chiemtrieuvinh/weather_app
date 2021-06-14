import { IWeatherLocationDay } from 'types/WeatherLocationDayType';
import actionTypes from './actionTypes';
import { Actions } from './actions';

export const initialState = {

};
export const reducer = (state: IWeatherLocationDay, action: Actions) => {
  const { type, response } = action;
  const cloneData = JSON.parse(JSON.stringify({ ...state }));
  switch (type) {
    // Fetch data from API action
    case actionTypes.FETCH:
      cloneData.generalData = {
        // checkExist: response.checkExist,
        // listAdvertising: response.listAdvertising,
        // listAdvertisingApplyPeriod: response.listAdvertisingApplyPeriod,
        // listAdvertisingExpense: response.listAdvertisingExpense,
        // listExpenses: response.listExpenses,
        // salesBudgetMonthly: response.salesBudgetMonthly
      };
      return cloneData;
    default:
      throw new Error();
  }
};

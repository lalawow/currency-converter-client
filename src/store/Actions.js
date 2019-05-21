import * as ActionTypes from './actionTypes.js';

export const setCurrency = (currencies) => {
  console.log("action", currencies)
  return {
    type: ActionTypes.SET_CURRENCY,
    currencies: currencies
  };
};

export const setStatus = () => {
  return {
    type: ActionTypes.SET_STATUS,
  };
};


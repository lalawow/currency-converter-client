import * as ActionTypes from './ActionTypes.js';

export const setCurrency = (currencies) => {
  return {
    type: ActionTypes.SET_CURRENCY,
    currencies: currencies
  };
};


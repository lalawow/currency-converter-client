import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {
  const { currencies } = action;

  switch (action.type) {
    case ActionTypes.SET_CURRENCY:
      return { ...state, currencies: currencies };
    default:
      return state
  }
}

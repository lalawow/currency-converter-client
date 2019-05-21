import { createStore } from 'redux';
import reducer from './reducer.js';

const initValues = {
    currencies: [],
    currencyLabel: new Date(),
    status: false
};

const store = createStore(reducer, initValues, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
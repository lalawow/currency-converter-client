import { createStore } from 'redux';
import reducer from './Reducer.js';

const initValues = {
    currencies: []
};

const store = createStore(reducer, initValues);

export default store;
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';

const createAppropriateStore = createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware(...[])));

export default store;

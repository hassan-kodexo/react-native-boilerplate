import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// Run the saga
const sagaKeys = Object.keys(sagas);

/**
 * Add All Sagas to saga middleware
 */
sagaKeys.forEach(saga => sagaMiddleware.run(sagas[saga]));

export default store;

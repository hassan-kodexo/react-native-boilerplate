import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;

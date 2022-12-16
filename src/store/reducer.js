import {combineReducers} from 'redux';

import authReducer from './auth/reducer';
import loaderReducer from './loader/reducer';

const reducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
});

export default reducer;

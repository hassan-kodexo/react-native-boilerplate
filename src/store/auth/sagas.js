import Toast from 'react-native-toast-message';
import {call, put, takeLatest} from 'redux-saga/effects';
import {get} from 'lodash';
import {LOGIN} from './actionTypes';
import {postLogin} from './fetch';
import {setAuthLoading} from '../loader/action';

import {checkUser, errorHandling} from '~utils';
import {setItem} from '~utils/mmkv';

/**
 * Login Saga
 * @param {Object} payload Login Payload
 * @param {Function} onDone Execute when login Successfully
 */
function* login({payload}) {
  try {
    yield put(setAuthLoading(true));
    const {access_token: token, id} = yield call(postLogin, payload);
    setItem('token', token);
    setItem('isLoggedIn', 'true');

    onDone();
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Success',
      text2: 'Logged In',
    });
  } catch (error) {
    errorHandling(error);
  } finally {
    yield put(setAuthLoading(false));
  }
}

/**
 * Watch Login
 */
export function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

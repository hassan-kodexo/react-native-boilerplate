import {LOGIN} from './actionTypes';

/**
 * Login Action Creator
 * @param {Object} payload Login Payload
 * @param {Function} onDone Execute when login successfully
 */
export const login = (payload, onDone) => ({
  type: LOGIN,
  payload,
  onDone,
});

import {
	SET_AUTH_LOADING,
} from './actionTypes';

/**
 * Auth Loader Action Creator
 * @param {Boolean} loader Is Loading
 */
export function setAuthLoading(payload) {
	return {
		type: SET_AUTH_LOADING,
		payload,
	};
}


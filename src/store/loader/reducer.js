import produce from 'immer';
import {SET_AUTH_LOADING} from './actionTypes';

const initialState = {
  auth_loading: false,
};

/**
 * Loader Reducer
 * @param {Object} state Current State defaults to Initial State
 * @param {Object} action Action
 * @param {Boolean} action.payload is Loading true or  false
 * @param {String} action.type action type
 */
function reducer(state = initialState, {payload, type}) {
  return produce(state, current => {
    const draft = current;

    switch (type) {
      case SET_AUTH_LOADING:
        draft.auth_loading = payload;
        break;

      default:
        draft;
        break;
    }
  });
}

export default reducer;

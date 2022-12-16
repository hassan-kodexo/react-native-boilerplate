import produce from 'immer';

const initialState = {
  user: null,
};

/**
 * Auth Reducer
 * @param {Object} state Current State (Defaults to Initial State)
 * @param {Object} action Action Object
 * @param {*} action.payload Action Payload
 * @param {String} action.type Action Type
 */
function reducer(state = initialState, {payload, type}) {
  return produce(state, current => {
    const draft = current;

    switch (type) {
      default:
        draft;
        break;
    }
  });
}

export default reducer;

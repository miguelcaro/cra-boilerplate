import { createReducer } from 'redux-starter-kit';

import { exampleAsyncAction, exampleAction } from 'actions/example';

const initialState = { key: null };

export default createReducer(initialState, {
  [String(exampleAsyncAction.pending)]: state => {
    state.exampleAsyncActionStatus = 'pending';
  },
  [String(exampleAsyncAction.fulfilled)]: (state, action) => {
    state.exampleAsyncActionStatus = 'fulfilled';
    Object.assign(state, action.payload);
  },
  [String(exampleAsyncAction.rejected)]: state => {
    state.exampleAsyncActionStatus = 'rejected';
  },
  [String(exampleAction)]: (state, action) => {
    state.key = "hello world!"
  }
});

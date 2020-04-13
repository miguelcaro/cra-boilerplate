import { createReducer } from '@reduxjs/toolkit';

import { exampleAsyncAction, exampleAction } from 'actions/example';

const initialState = { key: null };

export default createReducer(initialState, {
  [String(exampleAsyncAction.pending)]: (state) => {
    state.exampleAsyncActionStatus = 'pending';
  },
  [String(exampleAsyncAction.fulfilled)]: (state, action) => {
    state.exampleAsyncActionStatus = 'fulfilled';
    Object.assign(state, action.payload);
  },
  [String(exampleAsyncAction.rejected)]: (state) => {
    state.exampleAsyncActionStatus = 'rejected';
  },
  [String(exampleAction)]: (state) => {
    state.key = 'hello world!';
  },
});

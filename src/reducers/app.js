import { createReducer } from '@reduxjs/toolkit';
import { propOr, prop } from 'ramda';

import {
  startSpinner,
  stopSpinner,
  stopAllSpinners,
} from 'actions/app';

const initialState = {
  spinnerMessage: 'Loading, please wait...',
  pendingTasks: 0,
};

export default createReducer(initialState, {
  [String(startSpinner)]: (state, action) => {
    state.spinnerMessage = propOr(prop('spinnerMessage')(initialState), 'payload')(action);
    state.pendingTasks += 1;
  },
  [String(stopSpinner)]: (state) => {
    if (state.pendingTasks - 1 < 0) {
      throw new RangeError('Number of pending tasks decreased below zero. This indicates you have an error in your code. StopSpinner is called more often than startSpinner.');
    }
    state.pendingTasks -= 1;
  },
  [String(stopAllSpinners)]: (state) => {
    state.pendingTasks = 0;
  },
});

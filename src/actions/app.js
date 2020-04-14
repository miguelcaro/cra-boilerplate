import { createAction } from 'redux-promise-middleware-actions';

export const startSpinner = createAction('START_SPINNER', (payload) => payload);
export const stopSpinner = createAction('STOP_SPINNER');
export const stopAllSpinners = createAction('STOP_ALL_SPINNER');

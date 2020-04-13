import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from 'reducers';

const preloadedState = {};

const middleware = [promiseMiddleware, ...getDefaultMiddleware(), logger];

const store = configureStore({
  preloadedState,
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

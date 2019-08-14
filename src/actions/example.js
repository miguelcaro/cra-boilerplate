import {
  createAsyncAction,
  createAction
} from 'redux-promise-middleware-actions';
import { prop } from 'ramda';

import { reqExample } from 'api/example';

export const exampleAsyncAction = createAsyncAction(
  'EXAMPLE_ASYNC_ACTION',
  payload => reqExample(payload).then(prop('data'))
);

export const exampleAction = createAction('EXAMPLE_ACTION', payload => payload);

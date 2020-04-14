import { reject, isNil, isEmpty } from 'ramda';

export default reject((value) => isNil(value) || isEmpty(value));

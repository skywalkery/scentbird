import * as R from 'ramda';

const isValueEmpty = R.cond([
  [R.isNil, R.always(true)],
  [R.is(String), val => val.trim().length === 0],
  [R.is(Number), val => Number.isNaN(Number(val))],
  [R.is(Object), val => val.empty],
  [R.T, val => !val],
]);

export default value =>
  isValueEmpty(value) ? 'This field is required.' : undefined;

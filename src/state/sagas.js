import { all } from 'redux-saga/effects';

import product from 'ducks/product/sagas';

export default function* rootSaga() {
  yield all([product()]);
}

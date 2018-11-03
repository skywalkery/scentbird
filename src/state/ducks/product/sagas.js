import { call, fork, put, takeLatest } from 'redux-saga/effects';

import api from './api';
import { getOk, getError } from './actions';
import types from './types';

function* get({ payload: productId }) {
  try {
    const data = yield call(api.get, productId);
    yield put(getOk(data));
  } catch (e) {
    yield put(getError());
  }
}

export default function* root() {
  yield fork(() => takeLatest(types.PRODUCT_GET, get));
}

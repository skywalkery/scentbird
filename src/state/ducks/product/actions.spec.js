/* eslint-disable no-undef */
import { get, getOk, selectOption } from './actions';
import types from './types';

describe('product action creators', () => {
  it('get(): should create an action to get product', () => {
    const data = 1;
    const expectedAction = {
      type: types.PRODUCT_GET,
      payload: data,
    };
    expect(get(data)).toEqual(expectedAction);
  });

  it('getOk(): should create an action to set product', () => {
    const data = { data: 1 };
    const expectedAction = {
      type: types.PRODUCT_GET_OK,
      payload: data,
    };
    expect(getOk(data)).toEqual(expectedAction);
  });

  it('selectOption(): should create an action to select product option', () => {
    const data = 1;
    const expectedAction = {
      type: types.PRODUCT_SELECT_OPTION,
      payload: data,
    };
    expect(selectOption(data)).toEqual(expectedAction);
  });
});

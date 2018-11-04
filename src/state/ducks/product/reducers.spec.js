/* eslint-disable no-undef */
import reducer, { INITIAL_STATE } from './reducers';
import { get, getOk, selectOption } from './actions';

const testProduct = { hello: 'world', items: [{ id: 1 }] };

describe('product reducer', () => {
  it('PRODUCT_GET', () => {
    expect(reducer(INITIAL_STATE, get)).toEqual({
      ...INITIAL_STATE,
      isLoading: true,
    });
  });

  it('PRODUCT_GET_OK', () => {
    expect(reducer(INITIAL_STATE, getOk(testProduct))).toEqual({
      ...INITIAL_STATE,
      data: testProduct,
      selectedOptionId: 1,
      isLoading: false,
    });
  });

  it('PRODUCT_SELECT_OPTION', () => {
    expect(reducer(INITIAL_STATE, selectOption(2))).toEqual({
      ...INITIAL_STATE,
      selectedOptionId: 2,
    });
  });
});

import { createAction } from 'redux-actions';
import types from './types';

export const get = createAction(types.PRODUCT_GET);
export const getOk = createAction(types.PRODUCT_GET_OK);
export const getError = createAction(types.PRODUCT_GET_ERROR);
export const selectOption = createAction(types.PRODUCT_SELECT_OPTION);

export default {
  get,
  selectOption,
};

import * as R from 'ramda';
import { handleActions } from 'redux-actions';
import types from './types';

export const INITIAL_STATE = {
  data: null,
  isLoading: true,
  selectedOptionId: null,
};

const reducer = handleActions(
  {
    [types.PRODUCT_GET]: state => R.merge(state, { isLoading: true }),

    [types.PRODUCT_GET_OK]: (state, { payload: data }) =>
      R.merge(state, {
        isLoading: false,
        data,
        selectedOptionId: data.items[0].id,
      }),

    [types.PRODUCT_SELECT_OPTION]: (state, { payload: selectedOptionId }) =>
      R.merge(state, { selectedOptionId }),
  },
  INITIAL_STATE
);

export default reducer;

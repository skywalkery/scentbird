import { createSelector } from 'reselect';
import * as R from 'ramda';
import { Maybe } from 'ramda-fantasy';

const selectedOptionSelector = ({ product: { data, selectedOptionId } }) =>
  R.find(
    R.propEq('id', selectedOptionId),
    Maybe(data)
      .map(R.prop('items'))
      .getOrElse([])
  );

const selectedOption = createSelector(selectedOptionSelector, R.identity);

export default {
  selectedOption,
};

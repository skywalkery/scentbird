import React from 'react';
import Img from 'react-image';
import { compose, pure, withHandlers, withState } from 'recompose';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { styled } from 'hocs';
import styles from './styles.scss';

/* eslint-disable jsx-a11y/click-events-have-key-events */
const renderOption = ({
  img,
  volume,
  volumeUnit,
  isSubscription,
  isSelected,
  select,
}) => (
  <div styleName="option-wrapper">
    <div
      styleName={isSelected ? 'option-selected' : 'option'}
      onClick={select}
      role="radio"
      tabIndex="0"
      aria-checked={isSelected}
    >
      <Img styleName="preview" src={img} />
      <div styleName="volume-container">
        <span>{`${volume} ${volumeUnit}`}&nbsp;</span>
        <span>{`${isSubscription ? 'Subscription' : 'One-time\u00A0'}`}</span>
        {!isSubscription && <span styleName="purchase-word">purchase</span>}
      </div>
    </div>
  </div>
);

const Option = compose(
  withHandlers({
    select: ({ select, id, isSelected }) => () => !isSelected && select(id),
  }),
  pure,
  styled(styles)
)(renderOption);

const OptionList = ({ items, className, selectedId, select }) => (
  <div styleName="container" className={className}>
    {items.map(item => (
      <Option
        {...item}
        key={item.id}
        select={select}
        isSelected={selectedId === item.id}
      />
    ))}
  </div>
);

renderOption.propTypes = {
  img: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  volumeUnit: PropTypes.string.isRequired,
  select: PropTypes.func.isRequired,
  isSubscription: PropTypes.bool,
  isSelected: PropTypes.bool,
};

renderOption.defaultProps = {
  isSubscription: false,
  isSelected: false,
};

OptionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      volume: PropTypes.number.isRequired,
      volumeUnit: PropTypes.string.isRequired,
      isSubscription: PropTypes.bool,
    })
  ),
  select: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  className: PropTypes.string,
};

OptionList.defaultProps = {
  items: [],
  className: '',
  selectedId: null,
};

export default compose(
  withState('selectedId', 'select', R.propOr(null, 'selectedId')),
  pure,
  styled(styles)
)(OptionList);

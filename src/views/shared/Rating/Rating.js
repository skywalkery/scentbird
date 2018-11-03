import React from 'react';
import ReactRating from 'react-rating';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { styled } from 'hocs';
import styles from './styles.scss';

const Rating = ({ value, onChange, isReadOnly }) => (
  <ReactRating
    styleName="rating"
    emptySymbol="fas fa-star"
    fullSymbol={`fas fa-star ${styles['fa-star-highlighted']}`}
    initialRating={value}
    readonly={isReadOnly}
    onChange={onChange}
  />
);

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
};

Rating.defaultProps = {
  onChange: () => {},
  isReadOnly: false,
};

export default compose(
  pure,
  styled(styles)
)(Rating);

import React from 'react';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { Rating as SharedRating } from 'shared';
import { styled } from 'helpers/hocs';
import styles from './styles.scss';

const Rating = ({ average, count, className }) => (
  <div className={className}>
    <div>
      <span>AVERAGE RATING&nbsp;</span>
      <span styleName="reviews-count">
        ({`${count} review${count > 1 ? 's' : ''}`})
      </span>
    </div>
    <div styleName="rating">
      <SharedRating value={average} isReadOnly />
      <span styleName="rating-text">{average} out of 5</span>
    </div>
  </div>
);

Rating.propTypes = {
  average: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Rating.defaultProps = {
  className: '',
};

export default compose(
  pure,
  styled(styles)
)(Rating);

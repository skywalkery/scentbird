import React from 'react';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { styled } from 'hocs';
import Rating from '../Rating/Rating';
import styles from './styles.scss';

const Info = ({ brand, category, name, rating }) => (
  <div styleName="container">
    <span styleName="brand">{brand}</span>
    <span styleName="name">{name}</span>
    <span styleName="category">{category}</span>
    <Rating styleName="rating" average={rating.average} count={rating.count} />
  </div>
);

Info.propTypes = {
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    average: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
};

export default compose(
  pure,
  styled(styles)
)(Info);

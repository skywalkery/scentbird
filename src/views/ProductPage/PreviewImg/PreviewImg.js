import React from 'react';
import Img from 'react-image';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { styled } from 'hocs';
import styles from './styles.scss';

const PreviewImg = ({ src, sex }) => (
  <div styleName="preview-wrapper">
    <Img src={src} />
    <i
      className={`fas fa-${sex === 'female' ? 'venus' : 'mars'} ${
        styles['gender-ico']
      }`}
    />
  </div>
);

PreviewImg.propTypes = {
  src: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
};

export default compose(
  pure,
  styled(styles)
)(PreviewImg);

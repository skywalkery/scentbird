import React from 'react';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { TruncateText } from 'shared';
import { styled } from 'hocs';
import styles from './styles.scss';

const Description = ({ text, className }) => (
  <div className={className}>
    <div styleName="header">Description</div>
    <TruncateText text={text} max={200} />
  </div>
);

Description.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

Description.defaultProps = {
  text: '',
  className: '',
};

export default compose(
  pure,
  styled(styles)
)(Description);

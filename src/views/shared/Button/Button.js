import React from 'react';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { styled } from 'helpers/hocs';
import styles from './styles.scss';

/* eslint-disable react/button-has-type */
const Button = ({ children, type, onClick, className }) => (
  <button styleName="button" className={className} type={type} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  className: '',
};

export default compose(
  pure,
  styled(styles)
)(Button);

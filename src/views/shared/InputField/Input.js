import React from 'react';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { styled } from 'hocs';
import styles from './input.scss';

const isError = meta => meta.touched && meta.error && !meta.active;

const Input = ({ type, input, meta, label }) => (
  <div styleName="container">
    <div styleName={isError(meta) ? 'error-input-wrapper' : 'input-wrapper'}>
      <input
        type={type}
        styleName={input.value ? 'filled-input' : ''}
        {...input}
      />
      {label && (
        <div styleName="label">
          <span styleName="label-top" />
          <span styleName="label-text">{label}</span>
        </div>
      )}
    </div>
    {isError(meta) && <p>{meta.error}</p>}
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  label: null,
};

export default compose(
  pure,
  styled(styles)
)(Input);

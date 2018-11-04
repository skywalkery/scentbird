import React from 'react';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { styled } from 'hocs';
import renderInput from './NativeInput';
import renderSelect from './SelectInput';
import styles from './input.scss';

const isError = meta => meta.touched && meta.error && !meta.active;

const renderComponent = ({ type, ...props }) =>
  R.cond([
    [R.equals('select'), () => renderSelect({ type, ...props })],
    [R.T, () => renderInput({ type, ...props })],
  ])(type);

const Input = ({ meta, label, ...props }) => (
  <div styleName="container">
    <div styleName={isError(meta) ? 'error-input-wrapper' : 'input-wrapper'}>
      {renderComponent(props)}
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
  isDisabled: PropTypes.bool,
};

Input.defaultProps = {
  label: null,
  isDisabled: false,
};

export default compose(
  pure,
  styled(styles)
)(Input);

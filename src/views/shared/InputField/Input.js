import React from 'react';
import { compose, pure, withHandlers, withProps } from 'recompose';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import Select from 'react-select';

import { styled } from 'hocs';
import styles from './input.scss';

const isError = meta => meta.touched && meta.error && !meta.active;

const renderInput = ({ inputClassName, type, input, isDisabled }) => (
  <input
    className={inputClassName}
    type={type}
    styleName={input.value ? 'filled-input' : ''}
    disabled={isDisabled}
    {...input}
  />
);

const DropdownIndicator = () => <div className={styles['down-arrow']} />;

const SelectComponent = props => (
  <Select
    {...props}
    classNamePrefix="react-select"
    components={{ DropdownIndicator }}
  />
);

const SelectConnected = compose(
  withHandlers({
    onChange: ({ onChange }) => ({ value }) => onChange(value),
    onBlur: ({ onBlur, value }) => () => onBlur(value),
  }),
  withProps(({ value, options, inputClassName }) => ({
    value: R.find(R.propEq('value', value), options),
    className: inputClassName,
  })),
  pure
)(SelectComponent);
const renderSelect = ({ input, ...props }) => (
  <SelectConnected {...input} {...props} />
);

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

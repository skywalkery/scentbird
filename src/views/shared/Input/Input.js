import React from 'react';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { styled } from 'hocs';
import styles from './styles.scss';

const renderField = ({ type, input }) => (
  <input type={type} styleName={input.value ? 'filled-input' : ''} {...input} />
);

const renderFieldEnchanced = compose(
  pure,
  styled(styles)
)(renderField);

const Input = ({ name, type, isDisabled, label, component, className, ...props }) => (
  <div styleName="container" className={className}>
    <Field
      name={name}
      // type={processor.nativeType || type}
      type={type}
      originalType={type}
      disabled={isDisabled}
      // placeholder={placeholder || processor.placeholder}
      // format={processor.normalize}
      // normalize={processor.normalize}
      // validate={validators}
      component={component || renderFieldEnchanced}
      // processor={processor}
      {...props}
    />
    {label && (
      <div styleName="label">
        <span styleName="label-top" />
        <span styleName="label-text">{label}</span>
      </div>
    )}
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = {
  component: null,
  className: '',
  isDisabled: false,
  label: null,
};

export default compose(
  pure,
  styled(styles)
)(Input);

import React from 'react';
import { compose, pure, withPropsOnChange } from 'recompose';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { styled } from 'hocs';
import Input from './Input';
import validateRequired from './required';
import onlyLetters from './onlyLetters';
import regex from './regex';
import styles from './styles.scss';

const InputField = ({
  name,
  type,
  isDisabled,
  component,
  className,
  validators,
  inputClassName,
  ...props
}) => (
  <div styleName="container" className={className}>
    <Field
      name={name}
      // type={processor.nativeType || type}
      type={type}
      originalType={type}
      isDisabled={isDisabled}
      inputClassName={inputClassName}
      // placeholder={placeholder || processor.placeholder}
      // format={processor.normalize}
      // normalize={processor.normalize}
      validate={validators}
      component={component || Input}
      // processor={processor}
      {...props}
    />
  </div>
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  validators: PropTypes.arrayOf(PropTypes.func).isRequired,
};

InputField.defaultProps = {
  component: null,
  className: '',
  isDisabled: false,
  label: null,
};

export default compose(
  withPropsOnChange(
    ['isDisabled', 'isRequired', 'areOnlyLetters', 'regexMessage'],
    ({ isDisabled, isRequired, withRegex, areOnlyLetters, regexMessage }) => ({
      validators: isDisabled
        ? []
        : [
            isRequired ? validateRequired : undefined,
            areOnlyLetters ? onlyLetters : undefined,
            withRegex ? regex(withRegex, regexMessage) : undefined,
          ].filter(i => i !== undefined),
    })
  ),
  pure,
  styled(styles)
)(InputField);

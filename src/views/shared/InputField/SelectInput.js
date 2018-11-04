import React from 'react';
import Select from 'react-select';
import { compose, pure, withHandlers, withProps } from 'recompose';
import * as R from 'ramda';

import styles from './selectInput.scss';

const DropdownIndicator = () => <div className={styles['down-arrow']} />;

const SelectComponent = props => (
  <Select
    {...props}
    className='react-select-container'
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

export default ({ input, ...props }) => <SelectConnected {...input} {...props} />;

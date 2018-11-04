import React from 'react';

export default ({ inputClassName, type, input, isDisabled }) => (
  <input
    className={inputClassName}
    type={type}
    styleName={input.value ? 'filled-input' : ''}
    disabled={isDisabled}
    {...input}
  />
);

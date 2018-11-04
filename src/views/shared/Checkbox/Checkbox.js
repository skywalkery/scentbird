import React from 'react';
import { compose, pure, withPropsOnChange } from 'recompose';

import { styled } from 'hocs';
import styles from './styles.scss';

const Checkbox = ({ ...props }) => (
  <div styleName="container">
    <input styleName="checkbox" type="checkbox" {...props} />
    <div styleName="inner" />
  </div>
);

export default compose(
  withPropsOnChange(['value', 'checked'], ({ value, checked }) => ({
    checked: value === undefined ? checked : value,
  })),
  pure,
  styled(styles)
)(Checkbox);

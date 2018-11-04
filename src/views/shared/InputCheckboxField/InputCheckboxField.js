import React from 'react';
import { compose, pure } from 'recompose';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { Checkbox } from 'shared';
import { styled } from 'hocs';
import styles from './styles.scss';

const renderCheckbox = ({ label, input }) => (
  <div styleName="container">
    <Checkbox {...input} />
    <span>{label}</span>
  </div>
);

renderCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({}).isRequired,
};

const ConnectedCheckbox = compose(
  pure,
  styled(styles)
)(renderCheckbox);

const InputCheckboxField = props => (
  <Field component={ConnectedCheckbox} {...props} />
);

export default compose(pure)(InputCheckboxField);

import React from 'react';
import { InputField } from 'shared';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { styled } from 'hocs';
import styles from './styles.scss';

const FormFields = ({ hasPhone, cityOptions, stateOptions }) => (
  <React.Fragment>
    <div className="row">
      <InputField
        className="col-xs-12 col-md-6"
        name="first"
        type="text"
        label="First name"
        isRequired
        areOnlyLetters
      />
      <InputField
        className="col-xs-12 col-md-6"
        name="last"
        type="text"
        label="Last name"
        isRequired
        areOnlyLetters
      />
    </div>
    <div className="row">
      <InputField
        className="col-xs-12 col-md-8"
        name="street"
        type="text"
        label="Street address"
        isRequired
        withRegex={/[^a-zA-Z0-9- ]/i}
        regexMessage="Only letters, digits and - are valid"
      />
      <InputField
        className="col-xs-12 col-md-4"
        name="apt"
        type="text"
        label="Apt/Suite (Optional)"
      />
    </div>
    <div className="row">
      <InputField
        className="col-xs-12 col-md-4"
        name="zip"
        type="text"
        label="Zip code"
        isRequired
      />
      <InputField
        className="col-xs-12 col-md-4"
        name="city"
        type="select"
        options={cityOptions}
        placeholder="City"
        isRequired
      />
      <InputField
        className="col-xs-12 col-md-4"
        name="state"
        type="select"
        options={stateOptions}
        placeholder="State"
        isRequired
      />
    </div>
    <div className="row">
      <InputField
        className="col-xs-12 col-md-12"
        inputClassName={styles['country-input']}
        name="country"
        type="text"
        label="Country"
        isDisabled
      />
    </div>
    {hasPhone && (
      <div className="row">
        <InputField
          className="col-xs-12 col-md-6"
          name="phone"
          type="text"
          label="Mobile number (Optional)"
        />
        <div className={`col-xs-12 col-md-6 ${styles['phone-info-cell']}`}>
          We may send you special discounts and offers
        </div>
      </div>
    )}
  </React.Fragment>
);

FormFields.propTypes = {
  hasPhone: PropTypes.bool,
  cityOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  stateOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

FormFields.defaultProps = {
  hasPhone: false,
};

export default compose(
  pure,
  styled(styles)
)(FormFields);

import React from 'react';
import { InputField } from 'shared';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { styled } from 'hocs';
import styles from './styles.scss';

const FormFields = ({ hasPhone, cityOptions, stateOptions }) => (
  <React.Fragment>
    <div styleName="row">
      <InputField
        styleName="col-desktop-6"
        name="first"
        type="text"
        label="First name"
        isRequired
        areOnlyLetters
      />
      <InputField
        styleName="col-desktop-6"
        name="last"
        type="text"
        label="Last name"
        isRequired
        areOnlyLetters
      />
    </div>
    <div styleName="row">
      <InputField
        styleName="col-desktop-8"
        name="street"
        type="text"
        label="Street address"
        isRequired
        withRegex={/[^a-zA-Z0-9- ]/i}
        regexMessage="Only letters, digits and - are valid"
      />
      <InputField
        styleName="col-desktop-4"
        name="apt"
        type="text"
        label="Apt/Suite (Optional)"
      />
    </div>
    <div styleName="row">
      <InputField
        styleName="col-desktop-4"
        name="zip"
        type="text"
        label="Zip code"
        isRequired
      />
      <InputField
        styleName="col-desktop-4"
        name="city"
        type="select"
        options={cityOptions}
        placeholder="City"
        isRequired
      />
      <InputField
        styleName="col-desktop-4"
        name="state"
        type="select"
        options={stateOptions}
        placeholder="State"
        isRequired
      />
    </div>
    <div styleName="row">
      <InputField
        styleName="col-desktop-12"
        inputClassName={styles['country-input']}
        name="country"
        type="text"
        label="Country"
        isDisabled
      />
    </div>
    {hasPhone && (
      <div styleName="row">
        <InputField
          styleName="col-desktop-6"
          name="phone"
          type="text"
          label="Mobile number (Optional)"
        />
        <div className={`${styles['col-desktop-6']} ${styles.cell}`}>
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

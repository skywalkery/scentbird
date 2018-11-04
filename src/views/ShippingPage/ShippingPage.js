import React from 'react';
import { compose, pure, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { styled } from 'hocs';
import { FORMS } from 'constants';
import { InputField, InputCheckboxField, Button } from 'shared';
import styles from './styles.scss';

const ShippingPage = ({ handleSubmit, submit, goBack }) => (
  <div styleName="container">
    <div styleName="header">Shipping Address</div>
    <form onSubmit={handleSubmit(submit)}>
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
          type="text"
          label="City"
          isRequired
        />
        <InputField
          styleName="col-desktop-4"
          name="state"
          type="text"
          label="State"
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
      <div styleName="row">
        <InputCheckboxField
          styleName="col-desktop-6"
          name="isBillingAddressSame"
          label="Use this address as my billing address"
        />
      </div>
      <div styleName="button-row">
        <Button type="submit">
          Buy Now
          <i styleName="icon-arrow-left" />
        </Button>
        <Button isSecondary onClick={goBack}>
          Back
        </Button>
      </div>
    </form>
  </div>
);

ShippingPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  connect(() => ({
    initialValues: {
      isBillingAddressSame: true,
      country: 'United States',
    },
  })),
  reduxForm({ form: FORMS.SHIPPING_FORM }),
  withHandlers({
    goBack: ({ history }) => () => history.goBack(),
    /* eslint-disable-next-line no-console */
    submit: () => data => console.log(data),
  }),
  pure,
  styled(styles)
)(ShippingPage);

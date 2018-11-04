import React from 'react';
import { compose, pure, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { styled } from 'hocs';
import { FORMS } from 'constants';
import { Input, InputCheckboxField, Button } from 'shared';
import styles from './styles.scss';

const ShippingPage = ({ handleSubmit, submit, goBack }) => (
  <div styleName="container">
    <div styleName="header">Shipping Address</div>
    <form onSubmit={handleSubmit(submit)}>
      <div styleName="row">
        <Input
          styleName="col-desktop-6"
          name="first"
          type="text"
          label="First name"
        />
        <Input
          styleName="col-desktop-6"
          name="last"
          type="text"
          label="Last name"
        />
      </div>
      <div styleName="row">
        <Input
          styleName="col-desktop-8"
          name="street"
          type="text"
          label="Street address"
        />
        <Input
          styleName="col-desktop-4"
          name="apt"
          type="text"
          label="Apt/Suite (Optional)"
        />
      </div>
      <div styleName="row">
        <Input
          styleName="col-desktop-4"
          name="zip"
          type="text"
          label="Zip code"
        />
        <Input styleName="col-desktop-4" name="city" type="text" label="City" />
        <Input styleName="col-desktop-4" name="state" type="text" label="State" />
      </div>
      <div styleName="row">
        <Input
          styleName="col-desktop-12"
          name="country"
          type="text"
          label="Country"
        />
      </div>
      <div styleName="row">
        <Input
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
        <Button>
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
  withHandlers({
    goBack: ({ history }) => () => history.goBack(),
  }),
  reduxForm({ form: FORMS.SHIPPING_FORM }),
  pure,
  styled(styles)
)(ShippingPage);

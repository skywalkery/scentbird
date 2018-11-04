import React from 'react';
import { compose, pure, withHandlers, withPropsOnChange } from 'recompose';
import { reduxForm, formValueSelector, FormSection } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { styled } from 'hocs';
import { FORMS } from 'constants';
import { InputCheckboxField, Button } from 'shared';
import FormFields from './FormFields';
import states from './states.json';
import cities from './cities.json';
import styles from './styles.scss';

const ShippingPage = ({
  handleSubmit,
  submit,
  goBack,
  shippingCityOptions,
  shippingStateOptions,
  billingCityOptions,
  billingStateOptions,
  isBillingAddressSame,
}) => (
  <div styleName="container">
    <form onSubmit={handleSubmit(submit)}>
      <div styleName="header">Shipping Address</div>
      <FormSection name="shipping">
        <FormFields
          cityOptions={shippingCityOptions}
          stateOptions={shippingStateOptions}
          hasPhone
        />
      </FormSection>
      <div className="row">
        <InputCheckboxField
          className="col-xs-12 col-md-6"
          name="isBillingAddressSame"
          label="Use this address as my billing address"
        />
      </div>
      {!isBillingAddressSame && (
        <React.Fragment>
          <div styleName="header">Billing Address</div>
          <FormSection name="billing">
            <FormFields
              cityOptions={billingCityOptions}
              stateOptions={billingStateOptions}
            />
          </FormSection>
        </React.Fragment>
      )}
      <div className={`row ${styles['button-row']}`}>
        <div className="col-xs-12">
          <Button type="submit" styleName="button">
            Buy Now
            <i styleName="icon-arrow-left" />
          </Button>
        </div>
        <div className="col-xs-12">
          <Button styleName="button" isSecondary onClick={goBack}>
            Back
          </Button>
        </div>
      </div>
    </form>
  </div>
);

ShippingPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  shippingCityOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  shippingStateOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  billingCityOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  billingStateOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isBillingAddressSame: PropTypes.bool,
};

ShippingPage.defaultProps = {
  isBillingAddressSame: true,
};

const stateSelector = (state, section) =>
  formValueSelector(FORMS.SHIPPING_FORM)(state, `${section}.state`);
const citySelector = (state, section) =>
  formValueSelector(FORMS.SHIPPING_FORM)(state, `${section}.city`);
const isBillingAddressSameSelector = state =>
  formValueSelector(FORMS.SHIPPING_FORM)(state, 'isBillingAddressSame');

const getCitiesForState = state =>
  R.uniq(
    cities
      .filter(
        c =>
          state
            ? c.state === R.find(R.propEq('value', state), states).label
            : true
      )
      .map(c => ({ label: c.city, value: c.city }))
  );
const getStatesForCity = city =>
  R.uniq(
    states.filter(
      s =>
        city ? s.label === R.find(R.propEq('city', city), cities).state : true
    )
  );

export default compose(
  withRouter,
  connect(state => ({
    initialValues: {
      isBillingAddressSame: true,
      shipping: { country: 'United States' },
      billing: { country: 'United States' },
    },
    currentShippingState: stateSelector(state, 'shipping'),
    currentShippingCity: citySelector(state, 'shipping'),
    currentBillingState: stateSelector(state, 'billing'),
    currentBillingCity: citySelector(state, 'billing'),
    isBillingAddressSame: isBillingAddressSameSelector(state),
  })),
  withPropsOnChange(['currentShippingState'], ({ currentShippingState }) => ({
    shippingCityOptions: getCitiesForState(currentShippingState),
  })),
  withPropsOnChange(['currentShippingCity'], ({ currentShippingCity }) => ({
    shippingStateOptions: getStatesForCity(currentShippingCity),
  })),
  withPropsOnChange(['currentBillingState'], ({ currentBillingState }) => ({
    billingCityOptions: getCitiesForState(currentBillingState),
  })),
  withPropsOnChange(['currentBillingCity'], ({ currentBillingCity }) => ({
    billingStateOptions: getStatesForCity(currentBillingCity),
  })),
  reduxForm({ form: FORMS.SHIPPING_FORM }),
  withHandlers({
    goBack: ({ history }) => () => history.goBack(),
    submit: () => data =>
      /* eslint-disable-next-line no-console */
      console.log(
        R.keys(data.billing).length === 1 ? R.omit(['billing'], data) : data
      ),
  }),
  pure,
  styled(styles)
)(ShippingPage);

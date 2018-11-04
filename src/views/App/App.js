import React from 'react';
import { compose, pure } from 'recompose';
import { Route, Switch, withRouter } from 'react-router-dom';

import { ProductPage, Header, ShippingPage } from 'views';
import { styled } from 'hocs';
import './bootstrap-reboot.css';
import './tabs.scss';
import styles from './styles.scss';

const App = () => (
  <React.Fragment>
    <Header />
    <main>
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/profile/shipping" component={ShippingPage} />
      </Switch>
    </main>
  </React.Fragment>
);

export default compose(
  withRouter,
  pure,
  styled(styles)
)(App);

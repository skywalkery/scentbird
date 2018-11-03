import React from 'react';
import { compose } from 'recompose';

import { ProductPage, Header } from 'views';
import { styled } from 'hocs';
import './bootstrap-reboot.css';
import './tabs.scss';
import styles from './styles.scss';

const App = () => (
  <React.Fragment>
    <Header />
    <main>
      <ProductPage />
    </main>
  </React.Fragment>
);

export default compose(styled(styles))(App);

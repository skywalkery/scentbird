import React from 'react';
import { compose, pure } from 'recompose';
import { withRouter } from 'react-router-dom';

import { styled } from 'hocs';
import MenuItem from './MenuItem';
import styles from './styles.scss';

const Header = () => (
  <header>
    <nav>
      <ul>
        <MenuItem to="/product/1">Product</MenuItem>
        <MenuItem to="/profile/shipping">Shipping</MenuItem>
      </ul>
    </nav>
  </header>
);

export default compose(
  withRouter,
  pure,
  styled(styles)
)(Header);

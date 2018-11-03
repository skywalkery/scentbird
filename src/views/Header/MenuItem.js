import React from 'react';
import PropTypes from 'prop-types';
import { compose, pure } from 'recompose';
import { NavLink, withRouter } from 'react-router-dom';

import styles from './styles.scss';

const MenuItem = ({ children, to }) => (
  <li>
    <NavLink to={to} exact={to === '/'} activeClassName={styles['nav-active']}>
      {children}
    </NavLink>
  </li>
);

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default compose(
  withRouter,
  pure
)(MenuItem);

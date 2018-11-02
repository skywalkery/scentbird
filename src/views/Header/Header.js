import React from 'react';
import { compose, pure } from 'recompose';

import { styled } from 'helpers/hocs';
import styles from './styles.scss';

const Header = () => <header />;

export default compose(
  pure,
  styled(styles)
)(Header);

import React from 'react';

import { styled } from 'hocs';
import styles from './styles.scss';

// See http://tobiasahlin.com/spinkit
const Spinner = ({ ...props }) => (
  <div styleName="spinner" {...props}>
    <div />
    <div styleName="s2" />
    <div styleName="s3" />
    <div styleName="s4" />
    <div styleName="s5" />
    <div styleName="s6" />
    <div styleName="s7" />
    <div styleName="s8" />
    <div styleName="s9" />
    <div styleName="s10" />
    <div styleName="s11" />
    <div styleName="s12" />
  </div>
);

export default styled(styles)(Spinner);

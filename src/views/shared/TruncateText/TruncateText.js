import React from 'react';
import { compose, pure, withPropsOnChange, withStateHandlers } from 'recompose';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Identity } from 'ramda-fantasy';

import { styled } from 'hocs';
import styles from './styles.scss';

/* eslint-disable jsx-a11y/click-events-have-key-events */
const TruncateText = ({ head, tail, isExpanded, toggle }) => (
  <React.Fragment>
    <span>{head}</span>
    {!R.isEmpty(tail) &&
      !isExpanded && (
        <span styleName="more-less" onClick={toggle} role="button" tabIndex={0}>
          Read more &gt;
        </span>
      )}
    {isExpanded && <span>{tail}</span>}
    {isExpanded && (
      <span styleName="more-less" onClick={toggle} role="button" tabIndex={0}>
        &lt; Show less
      </span>
    )}
  </React.Fragment>
);

TruncateText.propTypes = {
  head: PropTypes.string.isRequired,
  tail: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const trimText = (text, max) =>
  R.cond([
    [t => t.length <= max, R.always([text, ''])],
    [
      R.T,
      t =>
        Identity(t)
          .map(str =>
            str
              .split('')
              .reverse()
              .join('')
          )
          .map(str => str.indexOf(' ', str.length - max))
          .map(idx => text.length - idx)
          .map(idx => [text.slice(0, idx), text.slice(idx)])
          .get(),
    ],
  ])(text);

export default compose(
  withPropsOnChange(['text', 'max'], ({ text, max }) =>
    Identity(trimText(text, max))
      .map(([head, tail]) => ({ head, tail }))
      .get()
  ),
  withStateHandlers(({ isExpanded = false }) => ({ isExpanded }), {
    toggle: ({ isExpanded }) => () => ({ isExpanded: !isExpanded }),
  }),
  pure,
  styled(styles)
)(TruncateText);

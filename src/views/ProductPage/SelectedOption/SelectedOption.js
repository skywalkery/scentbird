import React from 'react';
import Img from 'react-image';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

import { Button } from 'shared';
import { styled } from 'helpers/hocs';
import styles from './styles.scss';

const SelectedOption = ({
  previewUrl,
  isSubscription,
  price,
  volume,
  volumeUnit,
  className,
}) => (
  <div styleName="container" className={className}>
    <div styleName="column">
      <Img styleName="preview" src={previewUrl} />
      <div styleName="info">
        <div>
          <span>
            {isSubscription ? 'Subscription price' : 'One-time purchase'}:
          </span>
          <span styleName="bold">${price}</span>
        </div>
        <div>
          <span>Size:</span>
          <span styleName="bold">{`${volume} ${volumeUnit}`}</span>
        </div>
      </div>
    </div>
    <Button>Add To Queue</Button>
  </div>
);

SelectedOption.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  isSubscription: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  volumeUnit: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SelectedOption.defaultProps = {
  className: '',
};

export default compose(
  pure,
  styled(styles)
)(SelectedOption);

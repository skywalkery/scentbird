import React from 'react';
import {
  compose,
  pure,
  withProps,
  branch,
  renderComponent,
  lifecycle,
  withPropsOnChange,
} from 'recompose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { productActions, productSelectors } from 'ducks/product';
import { styled, deviceScreenDetector } from 'hocs';
import Info from './Info/Info';
import SelectedOption from './SelectedOption/SelectedOption';
import OptionList from './OptionList/OptionList';
import Description from './Description/Description';
import Disclaimer from './Disclaimer/Disclaimer';
import PreviewImg from './PreviewImg/PreviewImg';
import ProductLoading from './ProductLoading';
import styles from './styles.scss';

const ProductPage = ({
  isLeftColumnExists,
  product,
  selectedOption,
  selectOption,
}) => (
  <div styleName="container">
    {isLeftColumnExists && (
      <div styleName="preview-col">
        <PreviewImg src={product.previews.big} sex={product.sex} />
      </div>
    )}
    <div styleName="info-col">
      <Info
        brand={product.brand}
        category={product.category}
        name={product.name}
        rating={product.rating}
      />
      {!isLeftColumnExists && (
        <PreviewImg src={product.previews.big} sex={product.sex} />
      )}
      <SelectedOption
        styleName="selected-option"
        previewUrl={selectedOption.img}
        isSubscription={selectedOption.isSubscription}
        price={selectedOption.price}
        volume={selectedOption.volume}
        volumeUnit={selectedOption.volumeUnit}
      />
      <OptionList
        styleName="option-list"
        items={product.items}
        selectedId={selectedOption.id}
        select={selectOption}
      />
      <Description styleName="description" text={product.description} />
      <Disclaimer
        styleName="disclaimer"
        howItWorksTxt={product.howItWorks}
        ingredientsTxt={product.ingredients}
      />
    </div>
  </div>
);

ProductPage.propTypes = {
  isLeftColumnExists: PropTypes.bool.isRequired,
  product: PropTypes.shape({}).isRequired,
  selectedOption: PropTypes.shape({}).isRequired,
  selectOption: PropTypes.func.isRequired,
};

export default compose(
  deviceScreenDetector,
  withRouter,
  withPropsOnChange(['match'], ({ match }) => ({
    productId: match.params.id,
  })),
  connect(
    state => ({
      product: state.product.data,
      isLoading: state.product.isLoading,
      selectedOption: productSelectors.selectedOption(state),
    }),
    {
      get: productActions.get,
      selectOption: productActions.selectOption,
    }
  ),
  lifecycle({
    componentDidMount() {
      const { get, productId } = this.props;
      get(productId);
    },
  }),
  branch(({ isLoading }) => isLoading, renderComponent(ProductLoading)),
  withProps(({ deviceScreenType: { isDesktop, isTabletLandscape } }) => ({
    isLeftColumnExists: isDesktop || isTabletLandscape,
  })),
  pure,
  styled(styles)
)(ProductPage);

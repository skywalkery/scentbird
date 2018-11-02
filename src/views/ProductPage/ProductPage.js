import React from 'react';
import Img from 'react-image';
import { compose, pure } from 'recompose';

import { styled } from 'helpers/hocs';
import Info from './Info/Info';
import SelectedOption from './SelectedOption/SelectedOption';
import OptionList from './OptionList/OptionList';
import Description from './Description/Description';
import Disclaimer from './Disclaimer/Disclaimer';
import styles from './styles.scss';

const product = {
  previews: {
    big: '/assets/product-image-big.png',
    small: '/assets/product-image-big.png',
  },
  brand: 'Scentbird',
  category: 'Hand Cream',
  name: 'Rose & Prosecco',
  sex: 'female',
  rating: {
    average: 4.6,
    count: 245,
  },
  items: [
    {
      id: 1,
      isSubscription: true,
      price: 14.95,
      volume: 1.7,
      volumeUnit: 'oz',
      img: '/assets/product-image-big.png',
    },
    {
      id: 2,
      price: 12,
      volume: 1,
      volumeUnit: 'oz',
      img: '/assets/product-image-big.png',
    },
    {
      id: 3,
      price: 16.5,
      volume: 1.7,
      volumeUnit: 'oz',
      img: '/assets/product-image-big.png',
    },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo lobortis ante, sed finibus arcu cursus in. Morbi condimentum, magna id dapibus placerat, dolor nulla luctus nunc, sed molestie purus ex nec sem. Nunc nisl odio, bibendum sed ipsum a, accumsan bibendum tortor. Proin feugiat enim quis quam ultricies suscipit. Vivamus feugiat tellus nec faucibus posuere. Nam in erat lorem. Ut id turpis in odio iaculis ultrices. Nulla non pellentesque massa, eget tristique ipsum. In et lectus gravida, pulvinar lorem et, porttitor ante. Suspendisse eget mi in urna viverra molestie. Proin sit amet eros semper, faucibus massa eu, pharetra ipsum.',
  howItWorks:
    'Rebottled Eau de Cartier Essence de Bois, rebottled by Scentbird, Inc., an independent bottler from a genuine product wholly independent of Cartier Scentbird, Inc., New York, NY 10001',
  ingredients:
    'Water, glycerin, glyceryl stearate se, stearyl alcohol, caprylic/capric triglyceride, fragrance (perfume), cetyl alcohol, dimethicone, rosa canina (rose) hip oil, chamomilla recutita (matricaria) flower extract, aloe barbadensis leaf extract, prunus armeniaca (apricot) kernel oil, allantoin, ethylhexylglycerin, stearic acid, sodium pca, xanthan gum, cetearyl alcohol, disodium edta, phenoxyethanol, butylphenyl methylpropional (lilial), citral, citronellol, geraniol, hydroxyisohexyl 3-cyclohexene carboxaldehyde  (lyral), limonene, linalool',
};

const selectedOption = product.items[0];

const ProductPage = () => (
  <div styleName="container">
    <div styleName="preview-col">
      <div styleName="preview-wrapper">
        <Img src={product.previews.big} />
        <i
          className={`fas fa-3x fa-${
            product.sex === 'female' ? 'venus' : 'mars'
          } ${styles['gender-ico']}`}
        />
      </div>
    </div>
    <div styleName="info-col">
      <Info
        brand={product.brand}
        category={product.category}
        name={product.name}
        rating={product.rating}
      />
      <SelectedOption
        styleName="selected-option"
        previewUrl={selectedOption.img}
        isSubscription={selectedOption.isSubscription}
        price={selectedOption.price}
        volume={selectedOption.volume}
        volumeUnit={selectedOption.volumeUnit}
      />
      <OptionList styleName="option-list" items={product.items} selectedId={1} />
      <Description styleName="description" text={product.description} />
      <Disclaimer
        styleName="disclaimer"
        howItWorksTxt={product.howItWorks}
        ingredientsTxt={product.ingredients}
      />
    </div>
  </div>
);

export default compose(
  pure,
  styled(styles)
)(ProductPage);

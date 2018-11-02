import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { compose, pure } from 'recompose';
import PropTypes from 'prop-types';

// import { styled } from 'helpers/hocs';
// import styles from './styles.scss';

const Disclaimer = ({ className, howItWorksTxt, ingredientsTxt }) => (
  <Tabs className={className}>
    <TabList>
      <Tab>How it works</Tab>
      <Tab>Ingredients</Tab>
    </TabList>
    <TabPanel>{howItWorksTxt}</TabPanel>
    <TabPanel>{ingredientsTxt}</TabPanel>
  </Tabs>
);

Disclaimer.propTypes = {
  howItWorksTxt: PropTypes.string,
  ingredientsTxt: PropTypes.string,
  className: PropTypes.string,
};

Disclaimer.defaultProps = {
  howItWorksTxt: '',
  ingredientsTxt: '',
  className: '',
};

export default compose(
  pure
  // styled(styles)
)(Disclaimer);

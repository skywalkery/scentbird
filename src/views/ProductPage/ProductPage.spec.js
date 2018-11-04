/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import ProductPage from './ProductPage';

describe('Product Page', () => {
  it('Product Page Loading', () => {
    const initialState = { product: { isLoading: true } };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const newsContainer = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ProductPage />
        </MemoryRouter>
      </Provider>
    );
    expect(newsContainer.find('Spinner')).toHaveLength(1);
  });
});

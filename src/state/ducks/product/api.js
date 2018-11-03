import productData from './product.json';

/* eslint-disable no-unused-vars */
export default {
  get(productId) {
    return new Promise(resolve => {
      setTimeout(() => resolve({ data: productData }), 200);
    }).then(res => res.data);
  },
};

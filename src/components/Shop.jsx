import React from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

const Shop = ({ onAddItemToCart }) => {
  return (
    <section id="shop">
      <h2>Elegant footwear for everyone 👟🔥</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Shop;

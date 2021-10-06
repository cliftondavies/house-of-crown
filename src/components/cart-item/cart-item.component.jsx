import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, name, price, quantity }}) => (
  <div className='cart-item'>
    <img className='item-img' src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='item-name'>{name}</span>
      <span className='item-price'>{quantity} x £{price}</span>
    </div>
  </div>
);

export default CartItem;

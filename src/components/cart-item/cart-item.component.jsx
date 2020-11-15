import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemName,
  ItemPrice,
  ProductImage,
} from './cart-item.styles';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer>
      <ProductImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>
          {quantity} x ${price}
        </ItemPrice>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;

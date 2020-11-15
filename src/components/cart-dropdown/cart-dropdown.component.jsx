import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropDownContainer,
  CartItemsContainer,
  CartCheckoutButton,
  EmptyCartMessageContainer,
} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length > 0 ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyCartMessageContainer>Your cart is empty</EmptyCartMessageContainer>
        )}
      </CartItemsContainer>
      <CartCheckoutButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartCheckoutButton>
    </CartDropDownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

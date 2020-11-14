import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='collection-item_image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-item_footer'>
        <span className='collection-item_name'>{name}</span>
        <span className='collection-item_price'>{price}</span>
      </div>
      <CustomButton className='add-btn' inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

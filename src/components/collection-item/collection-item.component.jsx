import React from 'react';

import './collection-item.styles.scss';

function CollectionItem({ id, name, price, imageUrl }) {
	return (
		<div className='collection-item'>
			<div className='collection-item_image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-item_footer'>
				<span className='collection-item_name'>{name}</span>
				<span className='collection-item_price'>{price}</span>
			</div>
		</div>
	);
}

export default CollectionItem;

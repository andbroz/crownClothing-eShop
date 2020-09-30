import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

function CollectionPreview({ title, items }) {
	return (
		<section className='collection-preview'>
			<h1 className='collection-preview_title'>{title.toUpperCase()}</h1>
			<section className='collection-preview_items'>
				{/* can have performace issues O(n)*/}
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...restItem }) => {
						return <CollectionItem key={id} {...restItem} />;
					})}
			</section>
		</section>
	);
}

export default CollectionPreview;

import React from 'react';

import './collection-preview.styles.scss';

function CollectionPreview({ title, items }) {
	return (
		<div className='collection'>
			<h1 class='collection-title'>{title.toUpperCase()}</h1>
			<section className='collection-preview'>
				{/* can have performace issues */}
				{items
					.filter((item, idx) => idx < 4)
					.map(item => {
						return <div key={item.id}>{item.name}</div>;
					})}
			</section>
		</div>
	);
}

export default CollectionPreview;

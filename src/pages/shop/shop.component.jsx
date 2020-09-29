import React from 'react';
import { SHOP_DATA } from './shop.data.js';

class ShopPage extends React.Component {
	constructor(props) {
		super();

		this.state = {
			collection: SHOP_DATA,
		};
	}

	render() {
		return <h1>Shop Page</h1>;
	}
}

export default ShopPage;

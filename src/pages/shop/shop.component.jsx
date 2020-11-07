import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import './shop.styles.scss';

function ShopPage() {
  return (
    <main className='shop-page'>
      <CollectionsOverview />
    </main>
  );
}

export default ShopPage;

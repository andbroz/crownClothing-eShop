import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectShopCollections } from '../../redux/shop/shop.selectors';

import './shop.styles.scss';

function ShopPage({ collections }) {
  return (
    <main className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </main>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);

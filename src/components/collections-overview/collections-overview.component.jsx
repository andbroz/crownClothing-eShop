import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { selectShopCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

function CollectionsOverview({ collections }) {
  return (
    <section className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </section>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);

import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  CollectionItemsContainer,
} from './collection-preview.styles';

function CollectionPreview({ title, items, history, match, routeName }) {
  return (
    <CollectionPreviewContainer>
      <h1 onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </h1>
      <CollectionItemsContainer>
        {/* can have performace issues O(n)*/}
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionItemsContainer>
    </CollectionPreviewContainer>
  );
}

export default withRouter(CollectionPreview);

import styled from 'styled-components';

export const CollectionPreviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
      color: gray;
    }
  }
`;

export const CollectionItemsContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

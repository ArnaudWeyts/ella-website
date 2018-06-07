import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

import products from './all_products.json';

const ProductList = styled.div`
  display: flex;
  width: 65vw;
  flex-wrap: wrap;
  overflow: auto;
  max-height: 100vh;
`;

const Product = styled.div`
  padding: 3em;
  width: calc(50% - 2em);
  margin: 1em;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  font-size: 25px;
`;

const BlockTitle = styled.h3`
  color: ${props => props.color};
  cursor: pointer;
  display: inline-block;
  border: 1px solid ${props => props.color};
  padding: 0.5em;
  border-radius: 5px;
  margin: 0.5em 0;
`;

const BlockList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListValue = styled.div`
  float: right;
`;

const Image = styled.img`
  width: 100%;
`;

const renderProducts = () => {
  const templateBlocks = products.included.filter(bit => bit.type === 'knowledge-template-blocks');
  const productBits = products.included.filter(bit => bit.type === 'knowledge-bits');
  return products.data.map(product => (
    <Product key={product.resourceId}>
      <Title>{product.name.en}</Title>
      {templateBlocks.map((block) => {
        const knowledgeBitIDsForProductBlock = product.content.filter(bit => bit.knowledgeTemplateBlockId === block.resourceId);
        if (knowledgeBitIDsForProductBlock.length === 0) {
          return null;
        }
        return (
          <Collapsible
            key={block.resourceId}
            trigger={<BlockTitle color={block.color}>{block.name.en}</BlockTitle>}
          >
            {knowledgeBitIDsForProductBlock.map(bit => (
              <BlockList key={bit.knowledgeBitId}>
                {productBits.filter(ExBit => ExBit.resourceId === bit.knowledgeBitId).map((ExBit) => {
                  if (!ExBit.content) {
                    return <p>Not found</p>;
                  }
                  if (ExBit.content.url) {
                    return (
                      <li key={ExBit.resourceId}>
                        <Image src={ExBit.content.secure_url} alt="" />
                      </li>
                    );
                  }
                  if (ExBit.content.label) {
                    return (
                      <li key={ExBit.resourceId}>
                        {ExBit.content.label && ExBit.content.label.en}:&nbsp;
                        <ListValue>
                          {ExBit.content.name.en}&nbsp;
                          {ExBit.content.unit && ExBit.content.unit.en}
                        </ListValue>
                      </li>
                    );
                  }
                  return <li key={ExBit.resourceId}>{ExBit.content.name.en}</li>;
                })}
              </BlockList>
            ))}
          </Collapsible>
        );
      })}
    </Product>
  ));
};

const ProductListComponent = () => <ProductList>{renderProducts()}</ProductList>;

export default ProductListComponent;

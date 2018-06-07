import React from 'react';

import products from './all_products.json';

const renderProducts = () => {
  const templateBlocks = products.included.filter(bit => bit.type === 'knowledge-template-blocks');
  const productBits = products.included.filter(bit => bit.type === 'knowledge-bits');
  return products.data.map(product => (
    <div key={product.resourceId} style={{ margin: '3em' }}>
      <h2 style={{ fontSize: '30px' }}>{product.name.en}</h2>
      {templateBlocks.map((block) => {
        const knowledgeBitIDsForProductBlock = product.content.filter(bit => bit.knowledgeTemplateBlockId === block.resourceId);
        return (
          <div key={block.resourceId}>
            <h3 style={{ color: block.color }}>{block.name.en}</h3>
            {knowledgeBitIDsForProductBlock.map(bit => (
              <ul key={bit.knowledgeBitId}>
                {productBits.filter(ExBit => ExBit.resourceId === bit.knowledgeBitId).map((ExBit) => {
                  if (!ExBit.content) {
                    return <p>Not found</p>;
                  }
                  if (ExBit.content.url) {
                    return (
                      <li key={ExBit.resourceId}>
                        <img src={ExBit.content.secure_url} alt="" />
                      </li>
                    );
                  }
                  if (ExBit.content.label) {
                    return (
                      <li key={ExBit.resourceId}>
                        {ExBit.content.label && ExBit.content.label.en}:&nbsp;
                        {ExBit.content.name.en}&nbsp;
                        {ExBit.content.unit && ExBit.content.unit.en}
                      </li>
                    );
                  }
                  return <li key={ExBit.resourceId}>{ExBit.content.name.en}</li>;
                })}
              </ul>
            ))}
          </div>
        );
      })}
    </div>
  ));
};

const Demo = () => <div>{renderProducts()}</div>;

export default Demo;

import React from 'react';
import styled from 'styled-components';

import ProductList from './ProductList';
import Ella from './Ella';

const Container = styled.div`
  display: flex;
`;

const Demo = () => (
  <Container>
    <ProductList />
    <Ella />
  </Container>
);

export default Demo;

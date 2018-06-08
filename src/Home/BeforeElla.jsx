import React from 'react';
import styled from 'styled-components';

import WhiteCloud from '../img/white-cloud.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
  max-width: 37.5em;
`;

const Cloud = styled.div`
  width: 115vw;
  z-index: 1;
  height: 15em;
  background: url(${WhiteCloud});
  background-position: center 7em;
  background-repeat: repeat-x;
  margin-top: -15em;
  margin-bottom: -2em;

  @media (max-width: 900px) {
    background-position-y: 9em;
  }

  @media (max-width: 600px) {
    background-position-y: 11em;
  }
`;

const Title = styled.h2`
  z-index: 2;
  text-transform: uppercase;
`;

const List = styled.ul`
  justify-content: center;
  list-style: none;
  display: flex;
  padding: 0;
  width: 100%;
  flex-wrap: wrap;
`;

const Item = styled.li`
  width: 31%;
  margin: 0 1%;
  text-align: center;
`;

function BeforeElla() {
  return (
    <Container>
      <Cloud />
      <Title>Before Ella</Title>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ea maxime, quisquam officia
        architecto accusamus! Dolores, iusto vero! Natus accusantium quam commodi maxime incidunt
        perferendis perspiciatis consequuntur qui at odio?
      </p>
      <List>
        <Item>
          <h3>Memory</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus commodi
            voluptate.
          </p>
        </Item>
        <Item>
          <h3>Training</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus commodi
            voluptate.
          </p>
        </Item>
        <Item>
          <h3>Experience</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus commodi
            voluptate.
          </p>
        </Item>
        <Item>
          <h3>Documentation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus commodi
            voluptate.
          </p>
        </Item>
        <Item>
          <h3>Books</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus commodi
            voluptate.
          </p>
        </Item>
        <Item>
          <h3>Videos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus commodi
            voluptate.
          </p>
        </Item>
      </List>
    </Container>
  );
}

export default BeforeElla;

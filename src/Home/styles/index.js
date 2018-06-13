import styled from 'styled-components';

export const Container = styled.section`
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props => props.small && 'max-width: 37.5em;'};
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
`;

export const SubTitle = styled.h3``;

export const Paragraph = styled.p`
  text-align: center;
  max-width: 56.25em;
  font-size: 20px;
`;

export const BaseInput = styled.input`
  font-family: Avenir;
  outline: none;

  &:focus {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export const Input = BaseInput.extend`
  padding: 0.6em;
  border: solid 1px #999999;
  border-radius: 15px;
  box-sizing: border-box;

  &::placeholder {
    font-style: italic;
  }
`;

export const Button = BaseInput.withComponent('button').extend`
  cursor: pointer;
  border: none;
  border-radius: 18px;
  text-transform: uppercase;
`;

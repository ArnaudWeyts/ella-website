import styled, { css } from 'styled-components';

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
  color: ${props => (props.color ? props.color : '#000')};
  text-shadow: ${props => (props.dropshadow ? '7px 7px 5px rgba(0,0,0, 0.03)' : 'none')};
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props =>
    !props.noUnderline &&
    css`
      &:after {
        content: '';
        margin-top: 0.2em;
        width: 4.5em;
        height: 0;
        border-bottom: 2px solid ${props.color ? props.color : '#000'};
      }
    `};
`;

export const SubTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props =>
    !props.noUnderline &&
    css`
      &:after {
        content: '';
        margin-top: 0.2em;
        width: 2.3em;
        height: 0;
        border-bottom: 2px solid ${props.color ? props.color : '#000'};
      }
    `};
`;

export const Paragraph = styled.p`
  color: ${props => (props.color ? props.color : '#000')};
  text-shadow: ${props => (props.dropshadow ? '7px 7px 5px rgba(0,0,0, 0.03)' : 'none')};
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
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 18px;
  text-transform: uppercase;
  background: transparent;
  border: ${props => (props.border ? 'solid 2px #fff' : 'none')};
  padding: 0.5em 1.5em;
  font-size: 13px;
  text-shadow: 7px 7px 5px rgba(0,0,0, 0.03);
  box-shadow: 7px 7px 5px rgba(0,0,0, 0.03);
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  ${props =>
    props.leftBottom &&
    css`
      border-top: 3em solid ${props.color};
      border-right: 100vw solid transparent;
    `};

  ${props =>
    props.rightTop &&
    css`
      border-bottom: 3em solid ${props.color};
      border-left: 100vw solid transparent;
    `};

  ${props =>
    props.leftTop &&
    css`
      border-bottom: 3em solid ${props.color};
      border-right: 100vw solid transparent;
    `};

  ${props =>
    props.rightBottom &&
    css`
      border-top: 3em solid ${props.color};
      border-left: 100vw solid transparent;
    `};
`;

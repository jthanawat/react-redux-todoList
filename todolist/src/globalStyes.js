import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
`;

export const Container = styled.div`
  width: 900px;
  border: 1px solid #000;
  margin: 20px auto;
  padding-bottom: 20px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ $background }) => ($background ? $background : '#fff')};
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: none;
  margin: ${({ $margin }) => ($margin ? $margin : '0')};
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #404040;
  }
`;

export default GlobalStyle;

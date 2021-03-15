import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 500px;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

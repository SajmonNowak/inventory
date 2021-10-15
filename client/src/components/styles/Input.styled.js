import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  height: 70px;

`;

export const Input = styled.input`
  width: ${({type}) => type === "number" ? "100px" : "100%"};
  height: 50px;
`;

export const Label = styled.label`
  font-size: 18px;
`;
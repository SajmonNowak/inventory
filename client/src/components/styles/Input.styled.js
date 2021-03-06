import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: ${({ type }) => (type === "number" ? "100px" : "100%")};
  height: 50px;
  border: 1px solid grey;
  border-radius: 10px;
  outline: none;
  box-shadow: none;

  &:focus {
    border: 2px solid #01022d;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 18px;
  margin-bottom: 5px;
`;

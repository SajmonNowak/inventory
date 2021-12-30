import styled from "styled-components";

export const SelectContainer = styled.div`
  margin-top: 20px;
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  font-size: 18px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid grey;

  outline: none;

  &:focus {
    border: 2px solid #01022d;
  }
`;

export const Option = styled.option``;

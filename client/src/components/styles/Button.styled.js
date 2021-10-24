import styled from "styled-components";

export const Button = styled.button`
  width: 175px;
  height: 50px;
  background-color: ${({primary}) => primary ? "#003459" : "white"};
  border-color: ${({primary}) => primary ? "none" : "#003459"};
  color: ${({primary}) => primary ? "white" : "black"};
  border-radius: 10px;
  font-weight: bold;

  &:hover{
    border-color: ${({primary}) => primary ? "none" : "#007ea7"};
    background-color: ${({primary}) => primary ? "#007ea7" : "none"};
    color:  ${({primary}) => primary ? "#003459" : "#007ea7"};
  }
`;

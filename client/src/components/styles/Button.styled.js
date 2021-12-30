import styled from "styled-components";

export const Button = styled.button`
  width: 175px;
  height: 50px;
  background-color: ${({ primary }) => (primary ? "#01022d" : "white")};
  border-color: ${({ primary }) => (primary ? "none" : "#01022d")};
  color: ${({ primary }) => (primary ? "white" : "black")};
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s ease-out;

  &:hover {
    border-color: ${({ primary }) => (primary ? "none" : "#2b60ff")};
    background-color: ${({ primary }) => (primary ? "#2b60ff" : "none")};
    color: ${({ primary }) => (primary ? "#003459" : "#2b60ff")};
  }
`;

import styled from "styled-components";

export const MainPage = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InventoryTable = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 1200px;
  border: 1px solid black;
  margin: 20px auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ odd }) => (odd ? "white" : "lightgrey")};
  height: 40px;
  border: 1px solid;
  border-color: ${({ odd }) => (odd ? "white" : "lightgrey")};
  &:hover {
    border: 1px solid blue;
  }
`;

export const ItemName = styled.div``;

export const Type = styled.div``;

export const Category = styled.div``;

export const Amount = styled.div``;

export const Price = styled.div``;

export const Total = styled.div``;

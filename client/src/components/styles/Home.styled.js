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
  width: 1200px;
  border: 1px solid black;
  margin: 20px auto;
`;

export const Item = styled.div`
position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ odd }) => (!odd ? "white" : "lightgrey")};
  height: 40px;
  border: 1px solid;
  border-color: ${({ odd }) => (!odd ? "white" : "lightgrey")};
  &:hover {
    border: 1px solid blue;
  }
`;

export const ItemName = styled.div`
padding-left: 20px;
min-width: 200px;
font-weight: bold;
`;

export const Type = styled.div`
min-width: 100px;
`;

export const Category = styled.div`
min-width: 100px;
`;

export const Amount = styled.div`
min-width: 100px;
`;

export const Price = styled.div`
min-width: 100px;
`;

export const Total = styled.div`
min-width: 100px;
`;

export const Created = styled.div`
  min-width: 200px;
`;

export const ItemDescription = styled(Item)`
  background-color: black;
  color: white;
  font-weight: bold;
`;
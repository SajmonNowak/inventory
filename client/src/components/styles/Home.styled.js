import styled from "styled-components";

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  z-index: 1;
  height: 100%;
  overflow: auto;
`;

export const InventoryTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 50px;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ odd }) => (!odd ? "#E2EAFC" : "#EDF2FB")};
  height: 100px;
  margin: 1px;
  border: 1px solid;
  border-radius: 15px;
  border-color: ${({ odd }) => (!odd ? "white" : "lightgrey")};
  &:hover {
    border: 1px solid #012a4a;
  }
`;

export const ItemName = styled.div`
  padding-left: 20px;
  min-width: 150px;
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

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  margin-right: 20px;
`;

export const Image = styled.img`
  width: 50px;
  height: 100%;
`;

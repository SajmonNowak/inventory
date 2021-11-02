import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  height: 80%;
  margin: auto;
`;

export const ScrollBarContainer = styled.div`
  overflow: hidden;
  z-index: 99;
  height: 100%;
  padding: 0px 10px;

  &:hover {
    overflow: overlay;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`;

export const InventoryTable = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 98;

  &:hover {
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ odd }) => (!odd ? "#E2EAFC" : "#EDF2FB")};
  min-height: 60px;
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

export const Description = styled(Item)`
  background-color: black;
  color: white;
  font-weight: bold;
`;

export const Size = styled.div`
  min-width: 100px;
`;

export const ColorContainer = styled.div`
  min-width: 100px;
`;

export const Color = styled.div`
  margin-left: ${(props) => (props.color === "Different" ? "0px" : "12px")};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) =>
    props.color === "Different" ? "transparent" : props.color};
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

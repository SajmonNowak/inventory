import styled from "styled-components";

export const Modal = styled.div`
  z-index: 10000;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  min-width: 800px;
  height: 500px;
  background-color: white;
  padding: 40px;
  position: relative;
  display: flex;
`;

export const ImageContainer = styled.div`
  height: 250px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  border: 2px solid;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: center;
`;

export const LeftColumn = styled.div`
  width: 50%;
`;

export const RightColumn = styled.div`
  width: 50%;
`;

export const DataField = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const Label = styled.div`
  width: 100px;
`;

export const MarginElement = styled.div`
  width: 50px;
`;

import styled from "styled-components";

export const UI = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-template-areas:
    "side top top top top top top top"
    "side  content content content content content content content";
`;

export const TopBar = styled.div`
  grid-area: top;
  background-color: white;
  height: 100px;
  box-shadow: 0 4px 2px -2px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  z-index: 98;
`;

export const ContentContainer = styled.div`
  grid-area: content;
  height: calc(100vh - 100px);
`;

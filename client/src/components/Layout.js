import React from "react";
import SideBar from "./SideBar";
import { TopBar, ContentContainer, UI } from "./styles/Layout.styled";

const Layout = ({ children }) => {
  return (
    <UI>
      <TopBar>Inventory Items</TopBar>
      <SideBar />
      <ContentContainer>{children}</ContentContainer>
    </UI>
  );
};

export default Layout;

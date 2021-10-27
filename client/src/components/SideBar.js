import React from "react";
import {
  SideBarContainer,
  Name,
  SideNav,
  NavItem,
  Heading,
  PageName,
  ClothesIcon,
  FoodIcon,
  ChartIcon,
  Logo,
} from "./styles/SideBar.styled";

const SideBar = () => {
  return (
    <SideBarContainer>
      <Heading>
        {" "}
        <Logo />
        <Name>Inventory App</Name>
      </Heading>
      <SideNav>
        <NavItem>
          <ClothesIcon />
          <PageName>Food</PageName>
        </NavItem>
        <NavItem>
          {" "}
          <FoodIcon />
          <PageName>Clothes</PageName>{" "}
        </NavItem>
        <NavItem>
          {" "}
          <ChartIcon />
          <PageName>Statistics</PageName>
        </NavItem>
      </SideNav>
    </SideBarContainer>
  );
};

export default SideBar;

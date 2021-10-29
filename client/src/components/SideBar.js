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
  AddItems,
  PlusIcon,
} from "./styles/SideBar.styled";

const SideBar = () => {
  return (
    <SideBarContainer>
      <Heading>
        <Logo />
        <Name>Inventory App</Name>
      </Heading>
      <SideNav>
        <NavItem to="/food">
          <ClothesIcon className="icon" />
          <PageName>Food</PageName>
        </NavItem>
        <NavItem to="/clothes">
          <FoodIcon className="icon" />
          <PageName>Clothes</PageName>{" "}
        </NavItem>
        <NavItem>
          <ChartIcon className="icon" />
          <PageName>Statistics</PageName>
        </NavItem>
        <AddItems to="/add">
          <PlusIcon />
          <PageName className="addName">Add Items</PageName>
        </AddItems>
      </SideNav>
    </SideBarContainer>
  );
};

export default SideBar;

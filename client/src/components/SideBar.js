import React, { useState } from "react";
import { useLocation } from "react-router";
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
  InfoElement,
} from "./styles/SideBar.styled";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();

  return (
    <SideBarContainer>
      <Heading>
        <Logo />
        <Name>Inventory App</Name>
      </Heading>
      <SideNav>
        <NavItem selected={pathname === "/food" ? true : false} to="/food">
          <FoodIcon className="icon" />
          <PageName>Food</PageName>
        </NavItem>
        <NavItem
          to="/clothes"
          selected={pathname === "/clothes" ? true : false}
        >
          <ClothesIcon className="icon" />
          <PageName>Clothes</PageName>{" "}
        </NavItem>
        <NavItem
          to={{}}
          style={{ position: "relative" }}
          onMouseOver={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
        >
          <ChartIcon className="icon" />
          <PageName>Statistics</PageName>
          {toggle && (
            <InfoElement>
              This Project does not have any additional features besides
              creating, updating, deleteing and updating objects.
            </InfoElement>
          )}
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

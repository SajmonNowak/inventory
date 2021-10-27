import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiTShirt2Line } from "react-icons/ri";
import { MdOutlineFastfood } from "react-icons/md";
import { VscPieChart } from "react-icons/vsc";
import { MdOutlineInventory2 } from "react-icons/md";

export const SideBarContainer = styled.div`
  grid-area: side;
  min-width: 300px;
  height: 100vh;
  background-color: #03045e;
  color: white;
`;

export const Name = styled.h1`
  font-size: 24px;
  color: #caf0f8;
  font-size: 28px;
  padding: 20px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 200px;
  padding: 20px;
`;

export const Logo = styled(MdOutlineInventory2)`
  font-size: 34px;
`;

export const SideNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: white;
  display: flex;
  width: 200px;
  margin-top: 20px;

  &:hover {
    color: #caf0f8;
  }
`;

export const PageName = styled.div``;

export const ClothesIcon = styled(RiTShirt2Line)`
  width: 50px;
`;

export const FoodIcon = styled(MdOutlineFastfood)`
  width: 50px;
`;

export const ChartIcon = styled(VscPieChart)`
  width: 50px;
`;

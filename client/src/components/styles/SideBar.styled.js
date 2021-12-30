import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiTShirt2Line } from "react-icons/ri";
import { MdOutlineFastfood } from "react-icons/md";
import { VscPieChart } from "react-icons/vsc";
import { MdOutlineInventory2 } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";

export const SideBarContainer = styled.div`
  grid-area: side;
  min-width: 320px;
  min-height: 100vh;
  background-color: #01022d;
  color: white;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-size: 28px;
  padding: 20px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  padding: 20px;

  @media (max-height: 600px) {
    margin-bottom: 5vh;
  }
`;

export const Logo = styled(MdOutlineInventory2)`
  font-size: 34px;
  color: #2b60ff;
`;

export const SideNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  padding-left: 20px;
  color: ${({ selected }) => (selected ? " #2b60ff" : "white")};

  &:hover {
    background-color: rgba(6, 9, 193, 0.4);
    .icon {
      color: #2b60ff;
    }
  }
`;

export const AddItems = styled(NavItem)`
  color: #070bf2 !important;
  background-color: white;
  border-radius: 20px;
  display: flex;
  margin-top: 200px;
  margin-bottom: 20px;
  padding-left: 0px;
  width: 250px;
  justify-content: center;
  transition: all 0.3s ease-out;

  .addName {
    margin: 0px;
  }

  &:hover {
    color: white !important;
    background-color: #2b60ff;
  }

  @media (max-height: 700px) {
    margin-top: 10vh;
  }
`;

export const InfoElement = styled.div`
  position: absolute;
  width: 200px;
  min-height: 80px;
  background-color: #2b60ff;
  padding: 25px;
  right: -180px;
  top: 20px;
  font-size: 14px;
  border-radius: 5px;
  z-index: 100000;

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid #2b60ff;
    border-top: 15px solid #2b60ff;
    border-bottom: 15px solid transparent;
    left: -16px;
    top: 0px;
    z-index: 100000;
  }
`;

export const PageName = styled.div`
  margin-left: 20px;
`;

export const ClothesIcon = styled(RiTShirt2Line)`
  width: 50px;
`;

export const FoodIcon = styled(MdOutlineFastfood)`
  width: 50px;
`;

export const ChartIcon = styled(VscPieChart)`
  width: 50px;
`;

export const PlusIcon = styled(BsPlusLg)`
  font-size: 16px;
  margin-right: 10px;
`;

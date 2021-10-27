import React, { useState, useEffect } from "react";
import { MainPage } from "./styles/Home.styled";
import { Button } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import FoodInventory from "./FoodInventory";
import ClothesInventory from "./ClothesInventory";

const Home = () => {
  return (
    <MainPage>
      <FoodInventory />
      <ClothesInventory />

      <Link to="/add">
        <Button primary>Add Items</Button>
      </Link>
    </MainPage>
  );
};

export default Home;

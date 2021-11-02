import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Amount,
  InventoryTable,
  Description,
  ItemName,
  Price,
  Total,
  Item,
  Category,
  Created,
  Image,
  ImageContainer,
  InventoryContainer,
  ScrollBarContainer,
  PageContainer,
  Color,
  ColorContainer,
  Size,
} from "./styles/Inventory.styled";
import { FaTshirt } from "react-icons/fa";
import { GiArmoredPants } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { BsSunglasses } from "react-icons/bs";
import { GiMonclerJacket } from "react-icons/gi";

import CommandNav from "./CommandNav";
import placeholder from "../data/placeholder.png";

const ClothesInventory = () => {
  const [clothesInventory, setClothesInventory] = useState([]);
  const [render, reRenderHome] = useState(0);

  const getIcon = (category) => {
    let icon = "";
    switch (category) {
      case "T-Shirt":
        icon = <FaTshirt />;
        break;
      case "Pants":
        icon = <GiArmoredPants />;
        break;
      case "Sunglasses":
        icon = <BsSunglasses />;
        break;
      case "Jacket":
        icon = <GiMonclerJacket />;
        break;
      case "Shoes":
        icon = <GiConverseShoe />;
        break;
      default:
        icon = <FaTshirt />;
    }
    console.log(icon);
    return icon;
  };

  useEffect(() => {
    axios.get("/clothes").then((resp) => {
      let data = resp.data;
      setClothesInventory(data);
    });
  }, [render]);

  return (
    <PageContainer>
      <InventoryContainer>
        <Description>
          <ItemName>Name</ItemName>
          <ImageContainer>Image</ImageContainer>
          <Amount>Amount</Amount>
          <Size>Size</Size>
          <ColorContainer>Color</ColorContainer>
          <Category>Category</Category>
          <Price>Price</Price>
          <Total>Total</Total>
          <Created>Created</Created>
        </Description>
        <ScrollBarContainer>
          <InventoryTable>
            {clothesInventory.map((item, key) => {
              return (
                <Item odd={key % 2 === 0} key={key}>
                  <ItemName>{item.name}</ItemName>
                  <ImageContainer>
                    <Image
                      src={
                        item.imgPath
                          ? process.env.PUBLIC_URL +
                            item.imgPath.replace("client/public", "")
                          : placeholder
                      }
                      alt={item.name}
                    />
                  </ImageContainer>
                  <Amount>{item.amount}</Amount>
                  <Size>{item.size}</Size>
                  <ColorContainer>
                    <Color color={item.color}>
                      {item.color === "Different" ? "Different" : ""}
                    </Color>
                  </ColorContainer>
                  <Category className="center">
                    {getIcon(item.category)}
                  </Category>
                  <Price>{item.price}</Price>
                  <Total>
                    {Math.round(item.price * item.amount * 100) / 100}
                  </Total>
                  <Created>{item.created.split(" ")[0]}</Created>
                  <CommandNav
                    item={item}
                    inventory="clothes"
                    reRenderHome={() => reRenderHome(render + 1)}
                  />
                </Item>
              );
            })}
          </InventoryTable>
        </ScrollBarContainer>
      </InventoryContainer>
    </PageContainer>
  );
};

export default ClothesInventory;

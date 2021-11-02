import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Amount,
  InventoryTable,
  Description,
  ItemName,
  Type,
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
} from "./styles/Inventory.styled";

import CommandNav from "./CommandNav";
import placeholder from "../data/placeholder.png";

const FoodInventory = () => {
  const [foodInventory, setFoodInventory] = useState([]);
  const [render, reRenderHome] = useState(0);

  useEffect(() => {
    axios.get("/food").then((resp) => {
      let data = resp.data;
      setFoodInventory(data);
    });
  }, [render]);

  return (
    <PageContainer>
      <InventoryContainer>
        <Description>
          <ItemName>Name</ItemName>
          <ImageContainer>Image</ImageContainer>
          <Amount>Amount</Amount>
          <Category>Category</Category>
          <Price>Price</Price>
          <Total>Total</Total>
          <Created>Created</Created>
        </Description>
        <ScrollBarContainer>
          <InventoryTable>
            {foodInventory.map((item, key) => {
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
                  <Category>{item.category}</Category>
                  <Price>{item.price}</Price>
                  <Total>
                    {Math.round(item.price * item.amount * 100) / 100}
                  </Total>
                  <Created>{item.created.split(" ")[0]}</Created>
                  <CommandNav
                    item={item}
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

export default FoodInventory;

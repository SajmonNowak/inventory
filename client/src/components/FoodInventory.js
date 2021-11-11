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
} from "./styles/Inventory.styled";

import CommandNav from "./CommandNav";
import placeholder from "../data/placeholder.png";

const FoodInventory = () => {
  const [foodInventory, setFoodInventory] = useState([]);
  const [render, reRenderHome] = useState(0);
  const [sortSelection, setSortSelection] = useState("name");

  const sortDataAfter = (data, selection) => {
    const sortedData = data.sort(function(a, b){
      const textA = a[selection].toUpperCase();
      const textB = b[selection].toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    console.log(sortedData)
    return sortedData;
  }
  
  useEffect(() => {
    axios.get("/food").then((resp) => {
      let data = resp.data;
      const sortedData = sortDataAfter(data, sortSelection);
      setFoodInventory(sortedData);
    });
  }, [render, sortSelection]);

  return (
    <PageContainer>
      <InventoryContainer>
        <Description>
          <ItemName onClick={() => setSortSelection("name")}>Name</ItemName>
          <ImageContainer>Image</ImageContainer>
          <Amount>Amount</Amount>
          <Category onClick={() => setSortSelection("category")}>Category</Category>
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
                    inventory="food"
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

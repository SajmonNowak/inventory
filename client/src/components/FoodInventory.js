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
  SortIcon
} from "./styles/Inventory.styled";
import CommandNav from "./CommandNav";
import placeholder from "../data/placeholder.png";

const FoodInventory = () => {
  const [foodInventory, setFoodInventory] = useState([]);
  const [render, reRenderHome] = useState(0);
  const [sortSelection, setSortSelection] = useState("name");

  const sortDataAfter = (data, selection) => {
    let sortedData = data;
    if ( selection === "name" || selection === "category") {
     sortedData = data.sort(function (a, b) {
        a = a[selection].toUpperCase();
        b = b[selection].toUpperCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
  } else {
     sortedData = data.sort((a, b) =>  a[selection] - b[selection] )
  };
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
          <ItemName onClick={() => setSortSelection("name")}>Name {sortSelection === "name" ? <SortIcon active/> : <SortIcon/> }</ItemName>
          <ImageContainer>Image</ImageContainer>
          <Amount onClick={() => setSortSelection("amount")}>Amount {sortSelection === "amount" ? <SortIcon active/> : <SortIcon/> }</Amount>
          <Category onClick={() => setSortSelection("category")}>
            Category{sortSelection === "category" ? <SortIcon active/> : <SortIcon/> }
          </Category>
          <Price onClick={() => setSortSelection("price")}>Price{sortSelection === "price" ? <SortIcon active/> : <SortIcon/> }</Price>
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

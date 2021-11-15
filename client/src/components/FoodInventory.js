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
  SortIcon,
} from "./styles/Inventory.styled";
import CommandNav from "./CommandNav";
import placeholder from "../data/placeholder.png";
import { Link } from "react-router-dom";

const FoodInventory = () => {
  const [foodInventory, setFoodInventory] = useState([]);
  const [render, reRenderHome] = useState(0);
  const [sortSelection, setSortSelection] = useState("date");

  const sortDataAfter = (data, selection) => {
    let sortedData = data;
    if (selection === "name" || selection === "category") {
      sortedData = data.sort(function (a, b) {
        a = a[selection].toUpperCase();
        b = b[selection].toUpperCase();

        return a < b ? -1 : a > b ? 1 : 0;
      });
    } else {
      sortedData = data.sort(function (a, b) {
        if (selection === "date") {
          a = new Date(a[selection]);
          b = new Date(b[selection]);
        }

        return a[selection] - b[selection];
      });
    }
    return sortedData;
  };

  const openItemPage = () => {};

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
          <ItemName onClick={() => setSortSelection("name")}>
            Name {sortSelection === "name" ? <SortIcon active /> : <SortIcon />}
          </ItemName>
          <ImageContainer>Image</ImageContainer>
          <Amount onClick={() => setSortSelection("amount")}>
            Amount{" "}
            {sortSelection === "amount" ? <SortIcon active /> : <SortIcon />}
          </Amount>
          <Category onClick={() => setSortSelection("category")}>
            Category
            {sortSelection === "category" ? <SortIcon active /> : <SortIcon />}
          </Category>
          <Price onClick={() => setSortSelection("price")}>
            Price
            {sortSelection === "price" ? <SortIcon active /> : <SortIcon />}
          </Price>
          <Total>Total</Total>
          <Created onClick={() => setSortSelection("date")}>
            Created
            {sortSelection === "date" ? <SortIcon active /> : <SortIcon />}
          </Created>
        </Description>
        <ScrollBarContainer>
          <InventoryTable>
            {foodInventory.map((item, key) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  to={{ pathname: `/food/${item._id}` , data:{item}}}
                >
                  <Item odd={key % 2 === 0} key={key} onClick={openItemPage}>
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
                    <Price>{item.price}€</Price>
                    <Total>
                      {Math.round(item.price * item.amount * 100) / 100}€
                    </Total>
                    <Created>{item.created.split(" ")[0]}</Created>
                    <CommandNav
                      item={item}
                      inventory="food"
                      reRenderHome={() => reRenderHome(render + 1)}
                    />
                  </Item>
                </Link>
              );
            })}
          </InventoryTable>
        </ScrollBarContainer>
      </InventoryContainer>
    </PageContainer>
  );
};

export default FoodInventory;

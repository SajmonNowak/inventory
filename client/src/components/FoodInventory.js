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
  const [sortInReverseOrder, setSortInReverseOrder] = useState(false);

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

    sortedData = sortInReverseOrder ? sortedData.reverse() : sortedData;

    return sortedData;
  };

  const handleSortClick = (prop) => {
    if (sortSelection === prop) {
      setSortInReverseOrder(!sortInReverseOrder);
    } else {
      setSortInReverseOrder(false);
      setSortSelection(prop);
    }
  };

  useEffect(() => {
    axios.get("/food").then((resp) => {
      let data = resp.data;
      const sortedData = sortDataAfter(data, sortSelection);
      setFoodInventory(sortedData);
    });
  }, [render, sortSelection, sortInReverseOrder]);

  return (
    <PageContainer>
      <InventoryContainer>
        <Description>
          <ItemName onClick={() => handleSortClick("name")}>
            Name{" "}
            <SortIcon
              $active={sortSelection === "name"}
              reversed={sortSelection === "name" && sortInReverseOrder ? true : false}
            />
          </ItemName>
          <ImageContainer>Image</ImageContainer>
          <Amount onClick={() => handleSortClick("amount")}>
            Amount{" "}
            <SortIcon
              reversed={sortSelection ==="amount" && sortInReverseOrder ? true : false}
              $active={sortSelection === "amount"}
            />
          </Amount>
          <Category onClick={() => handleSortClick("category")}>
            Category
            {<SortIcon
              reversed={sortSelection ==="category" && sortInReverseOrder ? true : false}
              $active={sortSelection === "category"}
            />}
          </Category>
          <Price onClick={() => handleSortClick("price")}>
            Price
            <SortIcon
              reversed={sortSelection ==="price" && sortInReverseOrder ? true : false}
              $active={sortSelection === "price"}
            />
          </Price>
          <Total>Total</Total>
          <Created onClick={() => handleSortClick("date")}>
            Created
            <SortIcon
              reversed={sortSelection ==="date" && sortInReverseOrder ? true : false}
              $active={sortSelection === "date"}
            />
          </Created>
        </Description>
        <ScrollBarContainer>
          <InventoryTable>
            {foodInventory.map((item, key) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  to={{ pathname: `/food/${item._id}`, data: { item } }}
                  key={key}
                >
                  <Item odd={key % 2 === 0}>
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

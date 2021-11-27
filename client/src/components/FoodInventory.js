import React, { useState } from "react";
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
import useFetch from "./hooks/useFetch";
import useSort from "./hooks/useSort";
import sortDataAfter from "../helper/sortDataAfter";

const FoodInventory = () => {
  const [render, reRenderHome] = useState(0);
  const { sortSelection, sortInReverseOrder, handleSortClick } =
    useSort();
  const { data: foodInventory } = useFetch("/food", render);

  const getSortedData = () => {
    return sortDataAfter(foodInventory, sortSelection, sortInReverseOrder);
  };

  return (
    <PageContainer>
      <InventoryContainer>
        <Description>
          <ItemName onClick={() => handleSortClick("name")}>
            Name{" "}
            <SortIcon
              $active={sortSelection === "name"}
              reversed={
                sortSelection === "name" && sortInReverseOrder ? true : false
              }
            />
          </ItemName>
          <ImageContainer>Image</ImageContainer>
          <Amount onClick={() => handleSortClick("amount")}>
            Amount{" "}
            <SortIcon
              reversed={
                sortSelection === "amount" && sortInReverseOrder ? true : false
              }
              $active={sortSelection === "amount"}
            />
          </Amount>
          <Category onClick={() => handleSortClick("category")}>
            Category
            {
              <SortIcon
                reversed={
                  sortSelection === "category" && sortInReverseOrder
                    ? true
                    : false
                }
                $active={sortSelection === "category"}
              />
            }
          </Category>
          <Price onClick={() => handleSortClick("price")}>
            Price
            <SortIcon
              reversed={
                sortSelection === "price" && sortInReverseOrder ? true : false
              }
              $active={sortSelection === "price"}
            />
          </Price>
          <Total>Total</Total>
          <Created onClick={() => handleSortClick("created")}>
            Created
            <SortIcon
              reversed={
                sortSelection === "created" && sortInReverseOrder ? true : false
              }
              $active={sortSelection === "created"}
            />
          </Created>
        </Description>
        <ScrollBarContainer>
          <InventoryTable>
            {getSortedData().map((item, key) => {
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
                              item.imgPath.replace(new RegExp("client/public|client/build"), "")
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
                      collection="food"
                      reRenderHome={() => reRenderHome(render+1)}
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

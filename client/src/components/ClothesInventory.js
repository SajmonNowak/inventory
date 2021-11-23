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
  Color,
  ColorContainer,
  Size,
  SortIcon,
} from "./styles/Inventory.styled";
import { FaTshirt } from "react-icons/fa";
import { GiArmoredPants } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { BsSunglasses } from "react-icons/bs";
import { GiMonclerJacket } from "react-icons/gi";
import CommandNav from "./CommandNav";
import placeholder from "../data/placeholder.png";
import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import useSort from "./hooks/useSort";
import sortDataAfter from "../helper/sortDataAfter";

const ClothesInventory = () => {
  const [render, reRenderHome] = useState(0);
  const { sortSelection, sortInReverseOrder, handleSortClick } = useSort();
  const { data: clothesInventory } = useFetch("/clothes", render);

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
    return icon;
  };

  const getSortedData = () => {
    return sortDataAfter(clothesInventory, sortSelection, sortInReverseOrder);
  };

  return (
    <PageContainer>
      <InventoryContainer>
        <Description>
          <ItemName onClick={() => handleSortClick("name")}>
            Name{" "}
            <SortIcon
              reversed={
                sortSelection === "name" && sortInReverseOrder ? true : false
              }
              $active={sortSelection === "name"}
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
          <Size>Size</Size>
          <ColorContainer onClick={() => handleSortClick("color")}>
            Color
            <SortIcon
              reversed={
                sortSelection === "color" && sortInReverseOrder ? true : false
              }
              $active={sortSelection === "color"}
            />
          </ColorContainer>
          <Category onClick={() => handleSortClick("category")}>
            Category
            <SortIcon
              reversed={
                sortSelection === "category" && sortInReverseOrder
                  ? true
                  : false
              }
              $active={sortSelection === "category"}
            />
          </Category>
          <Price onClick={() => handleSortClick("price")}>
            Price{" "}
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
                  to={{ pathname: `/clothes/${item._id}`,  data: { item } }}
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
                    <Size>{item.size}</Size>
                    <ColorContainer>
                      <Color color={item.color}>
                        {item.color === "Different" ? "Different" : ""}
                      </Color>
                    </ColorContainer>
                    <Category className="center">
                      {getIcon(item.category)}
                    </Category>
                    <Price>{item.price}€</Price>
                    <Total>
                      {Math.round(item.price * item.amount * 100) / 100}€
                    </Total>
                    <Created>{item.created.split(" ")[0]}</Created>
                    <CommandNav
                      item={item}
                      collection="clothes"
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

export default ClothesInventory;

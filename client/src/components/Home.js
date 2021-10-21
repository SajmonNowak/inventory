import React, { useState, useEffect} from "react";
import axios from "axios";
import {
  Amount,
  InventoryTable,
  ItemDescription,
  ItemName,
  Type,
  Price,
  Total,
  Item,
  MainPage,
  Category,
  Created,
  Image,
  ImageContainer
} from "./styles/Home.styled";
import { Button } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import CommandNav from "./CommandNav";


const Home = () => {
  const [inventory, setInventory] = useState([]);
  const [render, reRenderHome] = useState(0);

  useEffect(() => {
    axios.get("/home").then((resp) => {
      let data = resp.data;
      setInventory(data);
    });
  }, [render]);

  return (
    <MainPage>
      <InventoryTable>
        <ItemDescription>
              <ItemName>Name</ItemName>
              <ImageContainer>Image</ImageContainer>
              <Amount>Amount</Amount>
              <Type>Type</Type>
              <Category>Category</Category>
              <Price>Price</Price>
              <Total>Total</Total>
              <Created>Date</Created>
        </ItemDescription>
        {inventory.map((item, key) => {
          return (
            <Item odd={key % 2 === 0} key={key}>
              <ItemName>{item.name}</ItemName>
              <ImageContainer>
              <Image src={item.imgPath ? process.env.PUBLIC_URL + item.imgPath.replace("client/public", "") : ""} alt={item.name}/>
              </ImageContainer>
              <Amount>{item.amount}</Amount>
              <Type>{item.type}</Type>
              <Category>{item.category}</Category>
              <Price>{item.price}</Price>
              <Total>{Math.round(item.price * item.amount * 100) / 100}</Total>
              <Created>{item.created}</Created>
              <CommandNav item={item} reRenderHome={() => reRenderHome(render+1)}/>
            </Item>
          );
        })}
      </InventoryTable>
      <Link to="/add">
        <Button>Add Items</Button>
      </Link>
    </MainPage>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
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
} from "./styles/Home.styled";
import { Button } from "./styles/Button.styled";
import { Link } from "react-router-dom";
import CommandNav from "./CommandNav";

const Home = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get("/home").then((resp) => {
      let data = resp.data;
      setInventory(data);
    });
  }, []);

  console.log(inventory);
  return (
    <MainPage>
      <InventoryTable>
        <ItemDescription>
              <ItemName>Name</ItemName>
              <Amount>Amount</Amount>
              <Type>Type</Type>
              <Category>Category</Category>
              <Price>Price</Price>
              <Total>Total</Total>
        </ItemDescription>
        {inventory.map((item, key) => {
          return (
            <Item odd={key % 2 === 0} key={key}>
              <ItemName>{item.name}</ItemName>
              <Amount>{item.amount}</Amount>
              <Type>{item.type}</Type>
              <Category>{item.category}</Category>
              <Price>{item.price}</Price>
              <Total>{Math.round(item.price * item.amount * 100) / 100}</Total>
              <Created>{item.created}</Created>
              <CommandNav item={item}/>
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

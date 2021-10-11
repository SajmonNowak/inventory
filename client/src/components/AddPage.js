import axios from "axios";
import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { AddPageContainer, Form } from "./styles/AddPage.styled";
import { Button } from "./styles/Button.styled";
import TextInput from "./TextInput";

const AddPage = () => {
  const [name, setName] = useState();
  const [category, setCategory] = useState("Sweets");
  const [type, setType] = useState("Food");
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();

  console.log(category);

  const addToDB = async (e) => {
    e.preventDefault();
    const response = await axios.post(`/${type}`, {
        itemName: name,
        itemCategory: category,
        itemType: type,
        itemPrice: price,
        itemAmount: amount,
    });
    console.log(response.data);
  };

  return (
    <AddPageContainer>
      <Form>
        <TextInput inputName="Name" setParentState={setName} />
        <SelectInput
          selectName="Type"
          options={["Food", "Nonfood"]}
          setParentState={setType}
        />
        <SelectInput
          selectName="Category"
          options={["Fruit", "Vegetable", "Meat", "Sweets", "Drink"]}
          setParentState={setCategory}
        />
        <TextInput inputName="Price" min="0,01" setParentState={setPrice} />
        <TextInput inputName="Amount" min="1" setParentState={setAmount} />
        <Button type="submit" onClick={addToDB}>
          Add Item
        </Button>
      </Form>
    </AddPageContainer>
  );
};

export default AddPage;

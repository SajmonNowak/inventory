import axios from "axios";
import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { AddPageContainer, Form, NumberInputContainer } from "./styles/AddPage.styled";
import { Button } from "./styles/Button.styled";
import TextInput from "./TextInput";
import { useHistory } from "react-router-dom";

const AddPage = () => {
  const [name, setName] = useState();
  const [category, setCategory] = useState("Sweets");
  const [type, setType] = useState("Food");
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  let history = useHistory();

  const addToDB = async (e) => {
    e.preventDefault();
    const response = await axios
      .post(`/${type}`, {
        itemName: name,
        itemCategory: category,
        itemType: type,
        itemPrice: price,
        itemAmount: amount,
      })
      .catch((err) => {
        console.log(err.response);
      });

      if(response && response.status === 201){
        history.push("/");
      }
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
        <NumberInputContainer>
        <TextInput inputName="Price" min="0,01" step="0,01" setParentState={setPrice}/>
        <div className="extraMargin" ></div>
        <TextInput inputName="Amount" min="1" setParentState={setAmount} />
        </NumberInputContainer>
        <Button type="submit" onClick={addToDB}>
          Add Item
        </Button>
      </Form>
    </AddPageContainer>
  );
};

export default AddPage;

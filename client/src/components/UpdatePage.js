import axios from "axios";
import React, { useState } from "react";
import SelectInput from "./SelectInput";
import {
  AddPageContainer,
  Form,
  NumberInputContainer,
} from "./styles/AddPage.styled";
import { Button } from "./styles/Button.styled";
import TextInput from "./TextInput";
import { useHistory } from "react-router-dom";

const UpdatePage = (props) => {
  const data = props.location.state.data;
  const history = useHistory();
  const [name, setName] = useState(data.name);
  const [category, setCategory] = useState(data.category);
  const [type, setType] = useState(data.type);
  const [price, setPrice] = useState(data.price);
  const [amount, setAmount] = useState(data.amount);

  const handleUpdate = async (e) => {
    e.preventDefault();
    let response = await axios
      .put("/food", {
        _id: data._id,
        itemName: name,
        itemCategory: category,
        itemType: type,
        itemPrice: price,
        itemAmount: amount,
      })
      .catch((err) => {
        console.log(err.response);
      });

    if (response && response.status === 201) {
      history.push("/");
    }
  };

  return (
    <AddPageContainer>
      <h2> Update </h2>
      <Form>
        <TextInput
          value={name}
          inputName="Name"
          setParentState={setName}
        />
        <SelectInput
          value={type}
          selectName="Type"
          options={["Food", "Nonfood"]}
          setParentState={setType}
        />
        <SelectInput
          value={category}
          selectName="Category"
          options={["Fruit", "Vegetable", "Meat", "Sweets", "Drink"]}
          setParentState={setCategory}
        />
        <NumberInputContainer>
          <TextInput
            value={price}
            inputName="Price"
            min="0,01"
            step="0,01"
            setParentState={setPrice}
          />
          <div className="extraMargin"></div>
          <TextInput
            value={amount}
            inputName="Amount"
            min="1"
            setParentState={setAmount}
          />
        </NumberInputContainer>
        <Button type="submit" onClick={handleUpdate}>
          Update Item
        </Button>
      </Form>
    </AddPageContainer>
  );
};

export default UpdatePage;

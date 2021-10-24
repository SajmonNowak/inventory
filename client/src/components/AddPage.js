import axios from "axios";
import React, { useState } from "react";
import {
  AddPageContainer,
  Heading,
  CollectionOptions,
  Option,
} from "./styles/AddPage.styled";
import { useHistory } from "react-router-dom";
import AddFoodComponent from "./AddFoodComponent";
import AddClothesComponent from "./AddClothesComponent";
import { useForm } from "react-hook-form";

const AddPage = () => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState();
  const [collection, setCollection] = useState();
  let history = useHistory();

  const addToDB = async (data) => {
    const response = await axios.post(`/${collection}`, data).catch((err) => {
      let allErrorsObj = err.response.data.errors;
      let ErrorObj = [...Object.values(allErrorsObj)];
      let messages = new Array(ErrorObj.map((err) => err.message));
      setMessage(messages);
    });

    if (response && response.status === 201) {
      if (data.Image.length > 0) {
        const imgData = new FormData();
        imgData.append("itemImage", data.Image[0]);
        imgData.append("itemName", data.Name);

        axios.post("/upload", imgData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      history.push("/");
    }
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <AddPageContainer>
      <Heading>What do you want to add to your inventory?</Heading>
      <CollectionOptions>
        <Option onClick={() => setCollection("food")}>Food</Option>
        <Option onClick={() => setCollection("clothes")}>Clothes</Option>
      </CollectionOptions>
      {collection === "food" && (
        <AddFoodComponent
          register={register}
          handleSubmit={handleSubmit}
          addToDB={addToDB}
          handleCancel={handleCancel}
          message={message}
        />
      )}
      {collection === "clothes" && (
        <AddClothesComponent
          register={register}
          handleSubmit={handleSubmit}
          addToDB={addToDB}
          handleCancel={handleCancel}
          message={message}
        />
      )}
    </AddPageContainer>
  );
};

export default AddPage;

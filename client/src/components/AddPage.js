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
  const { register, handleSubmit, reset} = useForm({mode:"OnChange", defaultValues:{Image:""}});
  const [message, setMessage] = useState();
  const [collection, setCollection] = useState();
  let history = useHistory();

  const addToDB = async (formData) => {
    const response = await axios
      .post(`/${collection}`, formData)
      .catch((err) => {
        let allErrorsObj = err.response.data.errors;
        let ErrorObj = [...Object.values(allErrorsObj)];
        let messages = new Array(ErrorObj.map((err) => err.message));
        setMessage(messages);
      });

    if (response && response.status === 201) {
      if (formData.Image.length > 0) {
        formData._id = response.data;
        const imgData = new FormData();
        imgData.append("itemImage", formData.Image[0]);
        imgData.append("_id", formData._id);

        axios.post(`/upload/${collection}`, imgData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      reset()
      history.push(`/${collection}`);
    }
  };

  const handleCancel = () => {
    history.push("/food");
  };

const handleClick = (collection) => {
  setCollection(collection);
  reset()
}

  return (
    <AddPageContainer>
      <Heading>What do you want to add to your inventory?</Heading>
      <CollectionOptions>
        <Option onClick={() => handleClick("food")}>Food</Option>
        <Option onClick={() => handleClick("clothes")}>Clothes</Option>
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

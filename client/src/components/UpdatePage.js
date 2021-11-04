import axios from "axios";
import React, { useState } from "react";
import { AddPageContainer } from "./styles/AddPage.styled";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import UpdateFood from "./UpdateFood";
import UpdateClothes from "./UpdateClothes";

const UpdatePage = (props) => {
  const data = props.location.state.data;
  const [inventory, setInventory] = useState(data.size ? "clothes" : "food");

  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const updateDB = async (formData) => {
    formData._id = data._id;
    let response = await axios.put(`${inventory}`, formData).catch((err) => {
      console.log(err.response);
    });

    if (response && response.status === 201) {
      if (formData.Image) {
        axios.put("/upload");
      }
      history.push("/");
    }
  };

  return (
    <AddPageContainer>
      <h2> Update </h2>
      {inventory === "food" && (
        <UpdateFood
          handleSubmit={handleSubmit}
          register={register}
          updateDB={updateDB}
          data={data}
        />
      )}
      {inventory === "clothes" && (
        <UpdateClothes
          handleSubmit={handleSubmit}
          register={register}
          updateDB={updateDB}
          data={data}
        />
      )}
    </AddPageContainer>
  );
};

export default UpdatePage;

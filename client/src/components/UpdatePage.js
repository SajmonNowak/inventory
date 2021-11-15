import axios from "axios";
import React, { useEffect, useState } from "react";
import { AddPageContainer } from "./styles/AddPage.styled";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import UpdateFood from "./UpdateFood";
import UpdateClothes from "./UpdateClothes";

const UpdatePage = () => {
  const { collection, id } = useParams();
  const [itemData, setItemData] = useState();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const updateDB = async (formData) => {
    formData._id = itemData._id;
    let response = await axios.put(`/${collection}`, formData).catch((err) => {
      console.log(err.response);
    });

    if (response && response.status === 201) {
      if (formData.Image.length > 0) {
        const imgData = new FormData();
        imgData.append("itemImage", formData.Image[0]);
        imgData.append("_id", formData._id);

        axios.post(`/upload/${collection}`, imgData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      history.push(`/${collection}`);
    }
  };

  useEffect(() => {
    async function fetchDataFromDB() {
      const resp = await axios.get(`/${collection}/${id}`);
      setItemData(resp.data);
    }

    fetchDataFromDB();
  }, []);

  return (
    <AddPageContainer>
      <h2> Update </h2>
      {itemData && (
        <React.Fragment>
          {collection === "food" && (
            <UpdateFood
              handleSubmit={handleSubmit}
              register={register}
              updateDB={updateDB}
              data={itemData}
            />
          )}
          {collection === "clothes" && (
            <UpdateClothes
              handleSubmit={handleSubmit}
              register={register}
              updateDB={updateDB}
              data={itemData}
            />
          )}
        </React.Fragment>
      )}
    </AddPageContainer>
  );
};

export default UpdatePage;

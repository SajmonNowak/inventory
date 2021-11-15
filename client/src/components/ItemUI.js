import React, { useEffect, useState } from "react";
import {
  ImageContainer,
  LeftColumn,
  RightColumn,
  DataField,
  Label,
} from "./styles/ItemPage.styled";
import placeholder from "../data/placeholder.png";
import { Image } from "./styles/Inventory.styled";
import axios from "axios";

const ItemUI = ({pathname}) => {
  const [itemData, setItemData] = useState();

  const getItemDataFromDB = () => {
    console.log("asas");
    axios.get(pathname).then((response) => setItemData(response.data));
  };

  useEffect(() => {
    getItemDataFromDB();
  }, []);

  console.log(itemData)

  return (
    <React.Fragment>
        {itemData && 
        <React.Fragment>
      <LeftColumn>
        <DataField>
          <Label>Name:</Label> {itemData.name}
        </DataField>
        <DataField>
          <Label>Category:</Label> {itemData.category}
        </DataField>
        <DataField>
          <Label>Amount:</Label> {itemData.amount}
        </DataField>
        <DataField>
          <Label>Price:</Label> {itemData.price}
        </DataField>
        <DataField>
          <Label>Added:</Label> {itemData.created}
        </DataField>
      </LeftColumn>

      <RightColumn>
        <ImageContainer>
          <Image
            src={
              itemData.imgPath
                ? process.env.PUBLIC_URL +
                  itemData.imgPath.replace("client/public", "")
                : placeholder
            }
            alt={itemData.name}
          />
        </ImageContainer>
      </RightColumn>
      </React.Fragment>

}
    </React.Fragment>
  );
};

export default ItemUI;

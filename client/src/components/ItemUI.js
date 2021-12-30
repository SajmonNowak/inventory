import React, { useEffect, useState } from "react";
import {
  ImageContainer,
  LeftColumn,
  RightColumn,
  DataField,
  Label,
  Content,
} from "./styles/ItemPage.styled";
import placeholder from "../data/placeholder.png";
import { Image } from "./styles/Inventory.styled";
import axios from "axios";

const ItemUI = ({ pathname }) => {
  const [itemData, setItemData] = useState();

  const getItemDataFromDB = () => {
    axios.get(pathname).then((response) => setItemData(response.data));
  };

  useEffect(() => {
    getItemDataFromDB();
  }, []);

  return (
    <React.Fragment>
      {itemData && (
        <Content>
          <LeftColumn>
            <DataField>
              <Label>Name:</Label> {itemData.name}
            </DataField>
            <DataField>
              <Label>Category:</Label> {itemData.category}
            </DataField>
            {itemData.color && (
              <React.Fragment>
                <DataField>
                  <Label>Color:</Label> {itemData.color}
                </DataField>
                <DataField>
                  <Label>Size:</Label> {itemData.size}
                </DataField>
              </React.Fragment>
            )}
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
                      itemData.imgPath.replace(
                        new RegExp("client/public|client/build"),
                        ""
                      )
                    : placeholder
                }
                alt={itemData.name}
              />
            </ImageContainer>
          </RightColumn>
        </Content>
      )}
    </React.Fragment>
  );
};

export default ItemUI;

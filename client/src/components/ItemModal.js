import React from "react";
import ReactDom from "react-dom";
import { useHistory } from "react-router";
import {
  Modal,
  ContentContainer,
  ImageContainer,
  ButtonContainer,
  LeftColumn,
  RightColumn,
  DataField,
  Label,
  MarginElement,
} from "./styles/ItemPage.styled";
import placeholder from "../data/placeholder.png";
import { Image } from "./styles/Inventory.styled";
import { Button } from "./styles/Button.styled";

const ItemModal = (props) => {
  const item = props.location.data.item;
  const history = useHistory();

  return ReactDom.createPortal(
    <Modal onClick={() => history.push("/food")}>
      <ContentContainer
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        <LeftColumn>
          <DataField>
            <Label>Name:</Label> {item.name}
          </DataField>
          <DataField>
            <Label>Category:</Label> {item.category}
          </DataField>
          <DataField>
            <Label>Amount:</Label> {item.amount}
          </DataField>
          <DataField>
            <Label>Price:</Label> {item.price}
          </DataField>
          <DataField>
            <Label>Added:</Label> {item.created}
          </DataField>
        </LeftColumn>

        <RightColumn>
          <ImageContainer>
            <Image
              src={
                item.imgPath
                  ? process.env.PUBLIC_URL +
                    item.imgPath.replace("client/public", "")
                  : placeholder
              }
              alt={item.name}
            />
          </ImageContainer>
        </RightColumn>

        <ButtonContainer>
          <Button primary>Update</Button>
          <MarginElement />
          <Button>Delete</Button>
        </ButtonContainer>
      </ContentContainer>
    </Modal>,
    document.getElementById("portal")
  );
};

export default ItemModal;

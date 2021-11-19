import React from "react";
import ReactDom from "react-dom";
import { useHistory, useLocation } from "react-router";
import {
  Modal,
  Container,
  ButtonContainer,
  MarginElement,
} from "./styles/ItemPage.styled";
import { Button } from "./styles/Button.styled";
import ItemUI from "./ItemUI";
import axios from "axios";

const ItemModal = (props) => {
  const location = useLocation();
  const collection = location.pathname.includes("food") ? "food" : "clothes";
  const history = useHistory();

  const openUpdate = () => {
    history.push({
      pathname: `/update${location.pathname}`,
    });
  };


  const deleteItem = () => {
    axios
      .delete(`/${collection}`, {
        data: props.location.data.item,
      })
      .then((answer) => {
        history.push(`/${collection}`).go(0)
      })
      .catch((err) => console.log(err.body));
  }


  return ReactDom.createPortal(
    <Modal onClick={() => history.push("/food")}>
      <Container
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        <ItemUI pathname={location.pathname} />
        <ButtonContainer>
          <Button primary onClick={openUpdate}>
            Update
          </Button>
          <MarginElement />
          <Button onClick={deleteItem}>Delete</Button>
        </ButtonContainer>
      </Container>
    </Modal>,
    document.getElementById("portal")
  );
};

export default ItemModal;

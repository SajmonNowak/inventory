import React from "react";
import ReactDom from "react-dom";
import { useHistory, useLocation} from "react-router";
import {
  Modal,
  ContentContainer,
  ButtonContainer,
  MarginElement,
} from "./styles/ItemPage.styled";
import { Button } from "./styles/Button.styled";
import ItemUI from "./ItemUI";

const ItemModal = (props) => {
  const location = useLocation();
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
        <ItemUI pathname = {location.pathname}/>
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

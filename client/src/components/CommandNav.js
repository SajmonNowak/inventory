import axios from "axios";
import React from "react";
import {
  Command,
  CommandContainer,
  TrashIcon,
  UpdateIcon,
} from "./styles/CommandNav.style";
import { useHistory } from "react-router-dom";

const CommandNav = ({ item }) => {
  let history = useHistory();

  const handleDelete = () => {
    axios
      .delete("/food", {
        data: item,
      })
      .catch((err) => console.log(err.body));
  };

  const openUpdate = () => {
    history.push({
      pathname: "/update",
      state: { data: item },
    });
  };

  return (
    <CommandContainer>
      <Command>
        <UpdateIcon onClick={openUpdate} />
      </Command>
      <Command onClick={handleDelete}>
        <TrashIcon />
      </Command>
    </CommandContainer>
  );
};

export default CommandNav;

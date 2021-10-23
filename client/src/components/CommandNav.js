import axios from "axios";
import React from "react";
import {
  Command,
  CommandContainer,
  DotsIcon,
  TrashIcon,
  UpdateIcon,
  Menu,
} from "./styles/CommandNav.style";
import { useHistory } from "react-router-dom";
import useToggle from "./hooks/useToggle";

const CommandNav = ({ item, reRenderHome }) => {
  const [open, toggle] = useToggle(null);
  let history = useHistory();
  const handleDelete = () => {
    axios
      .delete("/food", {
        data: item,
      })
      .then((answer) => {
        reRenderHome();
        toggle();
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
      <DotsIcon onClick={toggle} open={open} />
      {open && (
        <Menu>
          <Command>
            <UpdateIcon onClick={openUpdate} />
          </Command>
          <Command>
            <TrashIcon onClick={handleDelete} />
          </Command>
        </Menu>
      )}
    </CommandContainer>
  );
};

export default CommandNav;

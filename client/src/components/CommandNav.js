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

const CommandNav = ({ item, reRenderHome, inventory }) => {
  const [open, toggle] = useToggle(null);
  let history = useHistory();
  const handleDelete = () => {
    axios
      .delete(`/${inventory}`, {
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
      pathname: `/update/${inventory}/${item._id}`,
      state: { data: item },
    });
  };

  return (
    <CommandContainer onClick={(e) => {e.stopPropagation(); e.preventDefault()}}>
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

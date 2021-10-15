import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";

export const CommandContainer = styled.div`
    position: absolute;
    right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 90px;
`;

export const Command = styled.div`
  width: 40px;
  height: 80%;
  border: 1px solid black;
  background-color: #f5f1ed;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrashIcon = styled(BsTrash)`
  width: 80%;
  height: 80%;
  color: red;
`;
export const UpdateIcon = styled(GrUpdate)`
  width: 80%;
  height: 60%;
`;

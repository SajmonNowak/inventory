import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export const CommandContainer = styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  height: 100%;
  width: 90px;
`;

export const Command = styled.div`
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrashIcon = styled(BsTrash)`
  font-size: 24px;
  color: red;
`;
export const UpdateIcon = styled(GrUpdate)`
  font-size: 20px;
  margin-bottom: 4px;
`;

export const DotsIcon = styled(BiDotsHorizontalRounded)`
  /* width: 50px;
  height: 50px; */
  position: absolute;
  right: 10px;
  font-size: 36px;
  transform: ${({ open }) => (open ? "rotate(0.25turn)" : "none")};
  animation: ${({ open }) =>
    open === true ? "rotate" : open === null ? "none" : "rotateBack"};
  animation-duration: 1s;

  @keyframes rotate {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(0.25turn);
    }
  }

  @keyframes rotateBack {
    from {
      transform: rotate(0.25turn);
    }
    to {
      transform: rotate(0turn);
    }
  }
`;
export const Menu = styled.div``;

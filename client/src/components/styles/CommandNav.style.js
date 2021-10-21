import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import { HiDotsHorizontal } from "react-icons/hi";


export const CommandContainer = styled.div`
    position: absolute;
    right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 90px;
`;

export const Command = styled.div`
  width: 35px;
  height: 80%;
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

export const DotsIcon = styled(HiDotsHorizontal)`
 width: 50px;
 height: 50px;
 transform: ${({open}) => open ? "rotate(0.25turn)" : "none"};
 animation: ${({open}) => open == true ? "rotate" :  (open == null) ? "none" : "rotateBack"};
  animation-duration: 1s;


 @keyframes rotate {
  from {transform: rotate(0turn)}
  to {transform: rotate(0.25turn)}
}

@keyframes rotateBack {
  from {transform: rotate(0.25turn)}
  to {transform: rotate(0turn)}
}
`
export const Menu = styled.div`
  
`;
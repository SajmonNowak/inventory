import React from "react";
import { Input, FileInputContainer } from "./styles/FileInput.styled";
import { Label } from "./styles/Input.styled";

const FileInput = ({ setPicture, label }) => {
  const changePic = (e) => {
    setPicture(e.target.files[0]);
  };

  return (
    <FileInputContainer>
      <Label>{label}</Label>
      <Input type="file" name="itemImage" onChange={changePic} />
    </FileInputContainer>
  );
};

export default FileInput;

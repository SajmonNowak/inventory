import React from "react";
import { Input, FileInputContainer } from "./styles/FileInput.styled";
import { Label } from "./styles/Input.styled";

const FileInput = ({ register, label, imageChange }) => {
  return (
    <FileInputContainer>
      <Label>{label}</Label>
      <Input
        type="file"
        name="itemImage"
        {...register(`${label}`)}
        onChange={imageChange}
        accept="image/*"
      />
    </FileInputContainer>
  );
};

export default FileInput;

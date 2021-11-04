import React from "react";
import { InputContainer, Label, Input } from "./styles/Input.styled";

const TextInput = ({ inputName, min, step, value, register }) => {
  return (
    <InputContainer>
      <Label>{inputName}</Label>
      <Input
        name={inputName}
        {...register(`${inputName}`)}
        type={min ? "number" : "text"}
        min={min ? min : undefined}
        step={step ? step : undefined}
        defaultValue={value}
      />
    </InputContainer>
  );
};

export default TextInput;

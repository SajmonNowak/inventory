import React from "react";
import { Label } from "./styles/Input.styled";
import { SelectContainer, Select, Option } from "./styles/Select.styled";

const SelectInput = ({ selectName, options, register, value }) => {
  const createSelectOptions = () => {
    return options.map((option, index) => {
      return (
        <Option value={option} key={index}>
          {option}
        </Option>
      );
    });
  };

  return (
    <SelectContainer>
      <Label>{selectName}</Label>
      <Select value={value} {...register(`${selectName}`)}>
        {createSelectOptions()}
      </Select>
    </SelectContainer>
  );
};

export default SelectInput;

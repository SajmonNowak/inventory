import React from "react";
import { Label } from "./styles/Input.styled";
import { SelectContainer, Select, Option } from "./styles/Select.styled";

const SelectInput = ({ selectName, options, setParentState, value }) => {
  const createSelectOptions = () => {
    return options.map((option, index) => {
      return (
        <Option value={option} key={index}>
          {option}
        </Option>
      );
    });
  };

  const handleChange = (e) => {
    setParentState(e.target.value);
  };

  return (
    <SelectContainer>
      <Label>{selectName}</Label>
      <Select value={value} onChange={handleChange}>
        {createSelectOptions()}
      </Select>
    </SelectContainer>
  );
};

export default SelectInput;

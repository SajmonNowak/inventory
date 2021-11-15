import React from "react";
import SelectInput from "./SelectInput";
import { Form, NumberInputContainer } from "./styles/AddPage.styled";
import { Button } from "./styles/Button.styled";
import TextInput from "./TextInput";
import FileInput from "./FileInput";

const UpdateFood = ({ register, handleSubmit, updateDB, data }) => {
  return (
    <Form onSubmit={handleSubmit(updateDB)}>
      <TextInput value={data.name} inputName="Name" register={register} />
      <SelectInput
        defaultValue={data.category}
        selectName="Category"
        options={["Fruit", "Vegetable", "Meat", "Sweets", "Drink"]}
        register={register}
      />
      <NumberInputContainer>
        <TextInput
          value={data.price}
          inputName="Price"
          min="0.01"
          step="0.01"
          register={register}
        />
        <div className="extraMargin"></div>
        <TextInput
          value={data.amount}
          inputName="Amount"
          min="1"
          register={register}
        />
      </NumberInputContainer>
      <FileInput label="Image" register={register} />
      <Button primary type="submit">
        Update Item
      </Button>
    </Form>
  );
};

export default UpdateFood;

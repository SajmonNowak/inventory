import React from "react";
import SelectInput from "./SelectInput";
import { Form, NumberInputContainer } from "./styles/AddPage.styled";
import { Button } from "./styles/Button.styled";
import TextInput from "./TextInput";
import FileInput from "./FileInput";

const UpdateClothes = ({ register, handleSubmit, updateDB, data }) => {
  return (
    <Form onSubmit={handleSubmit(updateDB)}>
      <TextInput value={data.name} inputName="Name" register={register} />
      <SelectInput
        value={data.category}
        selectName="Category"
        options={["T-shirt", "Pants", "Shoes", "Sunglasses", "Jacket"]}
        register={register}
      />
      <SelectInput
        value={data.size}
        selectName="Size"
        options={["S", "M", "L", "XL", "XXL", "One Size"]}
        register={register}
      />
      <SelectInput
        value={data.color}
        selectName="Color"
        options={["Red", "Green", "Black", "White", "Yellow", "Different"]}
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

export default UpdateClothes;

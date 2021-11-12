import React from "react";
import SelectInput from "./SelectInput";
import {
  Form,
  NumberInputContainer,
  Message,
  MessageContainer,
  Heading,
  ButtonContainer,
} from "./styles/AddPage.styled";
import { Button } from "./styles/Button.styled";
import TextInput from "./TextInput";
import FileInput from "./FileInput";

const AddClothesComponent = ({
  addToDB,
  register,
  handleSubmit,
  handleCancel,
  message,
}) => {
  const printMessages = () => {
    const messageArray = message[0].map((m, index) => (
      <Message key={index}>{m}</Message>
    ));
    return messageArray;
  };

  return (
    <Form onSubmit={handleSubmit(addToDB)}>
      <Heading>Please fill in all Clothes information</Heading>
      <TextInput inputName="Name" register={register} />
      <SelectInput
        selectName="Category"
        options={["T-shirt", "Pants", "Shoes", "Sunglasses", "Jacket"]}
        register={register}
      />
      <SelectInput
        selectName="Size"
        options={["S", "M", "L", "XL", "XXL", "One Size"]}
        register={register}
      />
      <SelectInput
        selectName="Color"
        options={["Red", "Green", "Black", "White", "Yellow", "Different"]}
        register={register}
      />
      <NumberInputContainer>
        <TextInput
          inputName="Price"
          min="0.01"
          step="0.01"
          register={register}
        />
        <div className="extraMargin"></div>
        <TextInput inputName="Amount" min="1" register={register} />
      </NumberInputContainer>
      <FileInput label="Image" register={register} />
      {message && <MessageContainer>{printMessages()}</MessageContainer>}
      <ButtonContainer>
        <Button onClick={handleCancel}> Cancel</Button>
        <Button type="submit" primary>
          Add Item
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default AddClothesComponent;

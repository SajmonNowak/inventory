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
  messageArray,
}) => {
  const printMessages = () => {
    const messages = messageArray.map((m, index) => (
      <Message key={index}>{m}</Message>
    ));
    return messages;
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
        options={[
          "Red",
          "Green",
          "Black",
          "White",
          "Yellow",
          "Blue",
          "Purple",
          "Pink",
          "Brown",
          "Grey",
          "Orange",
          "Different",
        ]}
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
      {messageArray && <MessageContainer>{printMessages()}</MessageContainer>}
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

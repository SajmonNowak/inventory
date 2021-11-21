import styled from "styled-components";

export const AddPageContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  width: 400px;

  .submitButton {
    position: absolute;
    right: 0px;
  }
`;

export const NumberInputContainer = styled.div`
  display: flex;

  .extraMargin {
    margin-right: 20px;
  }
`;

export const Message = styled.div`
  width: 100%;
  color: red;
  font-size: 22px;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  padding: 20px;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const CollectionOptions = styled.div`
  display: flex;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 200px;
  height: 75px;
  margin: 20px;
  background-color: #01022d;
  border-radius: 10px;
`;

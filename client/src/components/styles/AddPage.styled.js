import styled from "styled-components";

export const AddPageContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;

export const Form = styled.form`
  width: 400px;

  & > * {
    margin: 20px;
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

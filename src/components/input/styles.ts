import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
  label {
    margin-bottom: 12px;
    color: #333;
    margin-left: 8px;

    span {
      font-size: 16px;
      color: #777;
    }
  }

  input,
  select {
    width: 100%;
    font-size: 20px;
    border: none;
    outline: none;
    height: 32px;
    background: transparent;
    padding: 8px;

    //* LIGHTEN THE PLACEHOLDER TEXT
    &::placeholder {
      // color: #aaa;
      color: #a9a9a9;
    }
  }

  select {
    padding: 2px 8px;
  }
`;

export const InputDiv = styled.div`
  border: 1px solid #555;
  width: 100%;
  border-radius: 12px;
  height: 45px;
  display: flex;
  align-items: center;

  //* ADDED FOR ACCESSIBILITY - WILL ADD A THICK BORDER WHEN USER CLICKS THE INPUT FIELD
  &:focus-within {
    border: 3px solid #7b876d;
  }
`;

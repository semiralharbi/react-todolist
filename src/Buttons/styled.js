import styled, { css } from "styled-components";

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: hsl(180, 100%, 25%);
  transition: 1s;

  &:hover {
    color: hsl(180, 100%, 35%);
    font-size: 18px;
  }
  &:active {
    color: hsl(180, 100%, 55%);
  }
  &:disabled {
    color: lightgray;
    font-size: 16px;
  }
`;

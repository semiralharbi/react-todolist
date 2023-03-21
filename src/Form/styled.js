import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const FormButton = styled.button`
  padding: 10px;
  border: none;
  background-color: hsl(180, 100%, 25%);
  color: white;
  transition: 1s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.2);

    @media (max-width: 767px) {
      transform: scaleY(1.2);
    }
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
    animation: rotation 0.5s 1 linear;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid hsl(180, 100%, 35%);
  &:focus {
    outline: 1.2px solid hsl(180, 100%, 40%);
  }
`;

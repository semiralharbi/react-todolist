import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid hsl(0, 0%, 83%);
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const ListItemsText = styled.span`
  word-break: break-all;
  &:hover {
    font-size: 20px;
    transition: 1s;
  }

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const ListButton = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  color: white;
  padding: 0;
  background-color: hsl(0, 100%, 35%);
  transition: 1s;

  &:hover {
    background-color: hsl(0, 100%, 40%);
    width: 35px;
    height: 35px;
  }

  &:active {
    background-color: hsl(0, 100%, 50%);
  }

  ${({ done }) =>
    done &&
    css`
      background-color: hsl(120, 100%, 25%);
      transition: 1s;

      &:hover {
        background-color: hsl(120, 100%, 40%);
        width: 35px;
        height: 35px;
      }

      &:active {
        background-color: hsl(120, 100%, 50%);
      }
    `}
`;

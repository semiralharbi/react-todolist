import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 0 5px hsl(0, 0%, 60%);
`;

export const SectionHeader = styled.div`
  padding: 20px;
  margin: 0;
  border-bottom: 1px solid hsl(0, 0%, 83%);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
export const SectionTitle = styled.h2`
  margin: 0;
`;

export const SectionBody = styled.div`
  padding: 20px;
`;

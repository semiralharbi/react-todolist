import { SectionBody, SectionHeader, SectionTitle, StyledSection } from "./style";
const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </SectionHeader>
    <SectionBody>{body}</SectionBody>
  </StyledSection>
);

export default Section;

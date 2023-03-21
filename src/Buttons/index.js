import { ButtonWrapper, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <ButtonWrapper>
      <StyledButton onClick={toggleHideDone}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</StyledButton>
      <StyledButton onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
        Ukończ wszystkie
      </StyledButton>
    </ButtonWrapper>
  );

export default Buttons;

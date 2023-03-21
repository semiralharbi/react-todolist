import { useRef, useState } from "react";
import { FormButton, FormInput, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?"
        autofocus
      />
      <FormButton>Dodaj zadanie</FormButton>
    </StyledForm>
  );
};

export default Form;

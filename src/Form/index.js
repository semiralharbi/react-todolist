import { useRef, useState } from "react";
import "./style.css";

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
    <form className="js-form form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        className="js-newTask form__input"
        placeholder="Co jest do zrobienia?"
        autofocus
      />
      <button className="js-newTaskButton form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;

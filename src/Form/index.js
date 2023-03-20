import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="js-form form" onSubmit={onFormSubmit}>
      <input
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

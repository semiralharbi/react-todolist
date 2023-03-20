import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <div className="section__buttons">
      <button onClick={toggleHideDone} className="section__hideButton">
        {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
      </button>
      <button onClick={setAllDone} className="section__doneButton" disabled={tasks.every(({ done }) => done)}>
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;

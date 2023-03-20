import "./style.css";
const Tasks = (props) => {
  return (
    <ul className="js-tasks list">
      {props.tasks.map((task) => (
        <li className={`list__items${task.done && props.hideDone === true ? " list__items--hidden" : ""}`}>
          <button onClick={() => props.toggleTaskDone(task.id)} className="list__buttons list__buttons--done">
            {task.done ? "✓" : ""}
          </button>

          <span className={`list__itemsText${task.done ? " list__itemsText--done" : ""}`}>{task.content}</span>

          <button onClick={() => props.removeTask(task.id)} className="list__buttons list__buttons--delete">
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;

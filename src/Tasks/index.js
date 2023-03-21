import { List, ListButton, ListItem, ListItemsText } from "./styled";
const Tasks = (props) => {
  return (
    <List>
      {props.tasks.map((task) => (
        <ListItem hidden={task.done && props.hideDone}>
          <ListButton onClick={() => props.toggleTaskDone(task.id)} done>
            {task.done ? "✓" : ""}
          </ListButton>

          <ListItemsText done={task.done}>{task.content}</ListItemsText>

          <ListButton onClick={() => props.removeTask(task.id)}>🗑️</ListButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Tasks;

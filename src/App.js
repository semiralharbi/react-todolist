import React, { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const readLocalStorageTasks = () => {
  const initTasks = [
    { id: 1, content: "przejsc na Reacta", done: false },
    { id: 2, content: "cos tam zrobic", done: true },
  ];
  const myTasks = JSON.parse(localStorage.getItem("tasks"));
  return myTasks ?? initTasks;
};
function App() {
  const [tasks, setTasks] = useState(readLocalStorageTasks);
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      { content: newTaskContent, done: false, id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1 },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("key", tasks);
  }, [tasks]);

  return (
    <Container>
      <Header title="List zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />
        }
      />
    </Container>
  );
}

export default App;

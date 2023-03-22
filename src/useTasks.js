import { useEffect, useState } from "react";

const readLocalStorageTasks = () => {
  const initTasks = [
    { id: 1, content: "przejsc na Reacta", done: false },
    { id: 2, content: "cos tam zrobic", done: true },
  ];
  const myTasks = JSON.parse(localStorage.getItem("tasks"));
  return myTasks ?? initTasks;
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(readLocalStorageTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("key", tasks);
  }, [tasks]);

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

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};

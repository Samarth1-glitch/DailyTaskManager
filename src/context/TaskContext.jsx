import { createContext, useContext, useEffect, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

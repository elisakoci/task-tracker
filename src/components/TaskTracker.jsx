import { useState } from "react";
import TaskCreationForm from "./TaskCreationForm";
import TasksList from "./TasksList";

const TaskTracker = () => {
  // Add state to store tasks
  const [tasks, setTasks] = useState([]);

  // Add function to add tasks
  const addTask = (taskDescription) => {
    setTasks((prevTasks) => {
      return [...prevTasks, taskDescription];
    });
  };

  return (
    <div className="task-tracker">
      {/* Include TaskCreationForm component here */}
      {/* Pass the addTask function as prop */}
      <TaskCreationForm addTask={addTask} />
      {/* Include TasksList component here */}
      {/* Pass the tasks array as prop */}
      <TasksList tasks={tasks} />
    </div>
  );
};

export default TaskTracker;

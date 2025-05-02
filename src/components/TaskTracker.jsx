import React from "react";
import TaskCreationForm from "./TaskCreationForm";

const TaskTracker = () => {
  // Add state to store tasks
  const [tasks, setTasks] = useState([]);

  // Add function to add tasks
  const addTasks = (taskDescription) => {
    setTasks((prevTasks) => {
      return [...prevTasks, taskDescription];
    });
  };

  return (
    <div className="task-tracker">
      {/* Include TaskCreationForm component here */}
      {/* Pass the addTask function as prop */}
      <TaskCreationForm addTask={addTasks} />
      {/* Include TasksList component here */}
      {/* Pass the tasks array as prop */}
      <TasksList tasks={tasks} />
    </div>
  );
};

export default TaskTracker;

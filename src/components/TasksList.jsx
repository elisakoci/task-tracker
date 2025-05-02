import React from "react";

const TasksList = ({ tasks }) => {
  if (!tasks.length) {
    return <p className="no-tasks">No tasks to display</p>;
  }

  return (
    <ul className="tasks-list">
      {/* Task items will be dynamically generated here */}
      {/* Assign index as key */}
      {/* Use task as value */}
      {/* Assign class "task-item" to each list element */}
      {tasks.map((taskDescription, index) => (
        <li key={index} className="task-item">
          {taskDescription}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;

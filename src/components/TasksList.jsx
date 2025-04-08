import React from "react";

const TasksList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks to display</p>;
  }

  return (
    <ul className="tasks-list">
      {/* Task items will be dynamically generated here */}
      {/* Assign index as key */}
      {/* Use task as value */}
      {/* Assign class "task-item" to each list element */}
    </ul>
  );
};

export default TasksList;

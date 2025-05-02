import React, { useState } from "react";

const TaskCreationForm = ({ addTask }) => {
  // Add state to store task description

  const [description, setDescription] = useState("");
  // ...

  // Create function to handle input change
  const updateDescription = () => {};
  // ...

  // Complete function to handle form submission
  const createNewTask = (event) => {
    event.preventDefault();

    if (description) {
      // Call addTask function
      addTask(description);
      // Clear input field
      setDescription("");
    }
  };

  return (
    <form className="task-creation-form" onSubmit={createNewTask}>
      {/* Implement input text field with placeholder "Enter task description" */}
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={updateDescription}
      ></input>
      {/* Assign the value and change handler to control the input */}

      {/* Implement button with text "Add Task" and type "submit" */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskCreationForm;

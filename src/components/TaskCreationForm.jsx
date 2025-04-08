import React from "react";

const TaskCreationForm = ({ addTask }) => {
  // Add state to store task description
  // ...

  // Create function to handle input change
  // ...

  // Complete function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call addTask function
    // ...
    // Clear input field
    // ...
  };

  return (
    <form className="task-creation-form" onSubmit={handleSubmit}>
      {/* Implement input text field with placeholder "Enter task description" */}
      {/* Assign the value and change handler to control the input */}

      {/* Implement button with text "Add Task" and type "submit" */}
    </form>
  );
};

export default TaskCreationForm;

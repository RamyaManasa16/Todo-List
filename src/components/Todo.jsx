import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <EditIcon className="edit-icon" onClick={() => editTodo(task.id)} />
        <DeleteForeverIcon
          className="delete-icon trash"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

import React from "react";

const Todo = (props) => {
  const {
    items,
    deleteTodo,
    setIsEdit,
    setWillUpdatedTodo,
    setTodoText,
    changeIsDone,
  } = props;
  return (
    <div
      className={`alert alert-${
        items.isDone === true ? "info" : "secondary"
      } d-flex justify-content-between align-item-center`}
      role="alert"
    >
      <p>{items.text}</p>
      <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteTodo(items.id)}
        >
          Delete
        </button>

        <button
          className="btn btn-sm btn-success mx-1"
          onClick={() => {
            setIsEdit(true);
            setWillUpdatedTodo(items.id);
            setTodoText(items.text);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => changeIsDone(items.id)}
          className="btn btn-sm btn-secondary"
        >
          {items.isDone === false ? "Done" : "Undone"}
        </button>
      </div>
    </div>
  );
};

export default Todo;

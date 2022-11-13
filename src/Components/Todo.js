import React from "react";

function Todo(props) {
  return (
    <div>
      <div className="todo-list__wrapper">
        <div className="todo-list">
          <input
            className="input-checkbox"
            type="checkbox"
            id={props.id}
            defaultChecked={props.completed}
            onChange={() => props.toggleTodoCompleted(props.id)}
          />
          <label className="todo__list" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="todo__delete">
          <button onClick={()=> props.deleteTodos(props.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;

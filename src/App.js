import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Todo from "./Components/Todo";
import Form from "./Components/Form";
import FilterButton from "./Components/FilterButton";

const Filter_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};

const FILTER_NAMES = Object.keys(Filter_MAP);

function App(props) {
  const [todos, setTodos] = useState(props.todos);
  const [filter, setFilter] = useState("All");
 

  function addTodos(name) {
    const newTodo = { id: `todo-${nanoid()}`, name, completed: false };
    setTodos([...todos, newTodo]);
  }

  const todoList = todos
    .filter(Filter_MAP[filter])
    .map((todo) => (
      <Todo
        id={todo.id}
        name={todo.name}
        completed={todo.completed}
        key={todo.id}
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodos={deleteTodos}
      />
    ));

  const todoNoun = todoList.length !== 1 ? "tasks" : "task";
  const todoRem = `${todoList.length} ${todoNoun} left`;

  function toggleTodoCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function deleteTodos(id) {
    const remainingTodos = todos.filter((todo) => id !== todo.id);

    setTodos(remainingTodos);
  }

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  

  return (
    <div className="App">
      <Form addTodo={addTodos} />

      {todoList}

      <div className="todo__footer">
        <div className="todo-right__footer">
          {/* <span className="todo-right__footerlist">
            <ion-icon name="add-outline"></ion-icon>
          </span> */}
          <span className="todo-right__footerlist">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <span className="todo-right__footerlist">{todoRem}</span>
        </div>
        {filterList}
      </div>
    </div>
  );
}

export default App;

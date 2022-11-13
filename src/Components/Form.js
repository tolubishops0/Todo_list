import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1 className="header__text">things to do</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add New"
          className="input__text"
          id="todo__input"
          value={name}
          onChange={handleChange}
        />
        <input value="Add" type="submit" />
      </form>
    </div>
  );
}

export default Form;

import React from "react";
import ".././App.css";
import { useState } from "react";

function FilterButton(props) {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((current) => !current);
  };
  return (
    <div>
      <div className="todo__status">
        <ul>
          <li
            className={isActive ? "show" : "hide"}
            onClick={() => {
              props.setFilter(props.name);
              handleActive();
            }}
          >
            {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterButton;

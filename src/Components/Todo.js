import React from "react";
import "./Todo.css";

export default function Todo() {
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" />
          <button> + </button>

          <ol>
            <li>BUY APPLE</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

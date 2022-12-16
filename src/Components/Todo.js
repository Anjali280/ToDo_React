import React from "react";
import "./Todo.css";

export default function Todo() {
  const [inputList, setInputList] = React.useState("");
  const [Items, setItems] = React.useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const itemsDisplay = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={itemsDisplay}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval) => {
              return <li> {itemval} </li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

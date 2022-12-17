import React from "react";
import "./Todo.css";
import TodoList from "./TodoList";

export default function Todo() {
  const [inputList, setInputList] = React.useState("");
  const [Items, setItems] = React.useState([]);

  // for getting the input value from the target.....
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  // After getting the input vaue from the target , put it in the array....
  const itemsDisplay = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  // for deleting the items
  // index = its the index no of the all the items in the olditems array
  // id = this is the particulary selected item for deleting
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrayElem, index) => {
        return id !== index;
      });
    });
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
            {Items.map((itemval, index) => {
              // key={index} each child in a list should have a unique key prop......
              return (
                <TodoList
                  text={itemval} // for displaying data
                  key={index}
                  id={index}
                  onSelect={deleteItems} // for deleting items
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

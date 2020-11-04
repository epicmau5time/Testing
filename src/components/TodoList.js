import React from "react";

const TodoList = ({ items, setItems }) => {
  const itemDone = (id) => (e) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    setItems(newItems);
    console.log("called");
  };

  const itemList = items.map((item) => (
    <div key={item.id} className="centered">
      <p
        onClick={itemDone(item.id)}
        style={{ color: item.done ? "red" : "black" }}
      >
        {item.text}
      </p>
    </div>
  ));

  return itemList;
};

export default TodoList;

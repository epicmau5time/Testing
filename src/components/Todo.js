import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList.js";

function Todo() {
  let [items, setItems] = useState(() => {
    if (localStorage.getItem("items"))
      return JSON.parse(localStorage.getItem("items"));
    else return [];
  });

  let inputRef = useRef();

  function itemAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    const newItem = inputRef.current.value;
    const newItems = [
      ...items,
      { id: items.length, text: newItem, done: false }
    ];
    setItems(newItems);
    inputRef.current.value = null;
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="centered">
        <form onSubmit={itemAdd}>
          <input type="text" ref={inputRef}></input>
          <button type="submit">Add</button>
        </form>
        <TodoList type="submit" items={items} setItems={setItems} />
      </div>
    </>
  );
}

export default Todo;

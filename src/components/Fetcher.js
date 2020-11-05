import React, { useState, useRef, useEffect } from "react";
import { getItem, setItem } from "../helpers/localStorageTest";

export default function ApiTest() {
  const renderCount = useRef(0);
  console.log(1);

  const [content, setContent] = useState([]);
  console.log(2);
  // const [vote, setVote] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(6);

        const data = await response.json();
        const final = data.map((item) => ({ ...item, votes: 0 }));
        // console.log("fetch");
        console.log(7);
        setContent(final);

        setItem("content", final);
        console.log(8);
      } catch (error) {
        console.log(error);
      }
    };

    console.log(3);
    const cache = getItem("content");

    renderCount.current++;

    // console.log(cache.length);
    if (renderCount.current < 1) {
      console.log(4);

      fetchApi();
      return;
    } else {
      console.log(5);
      setContent(cache);
    }
  }, []);

  const items = content.map((c, i) => (
    <div key={i}>
      <h3>{c.title}</h3>
      <div>
        <p>ID: {c.id}</p>
        <p>User ID: {c.userId}</p>
        <p>Body: {c.body}</p>
        <button>+</button>
        <p>Votes: {c.votes}</p>
        <button>-</button>
      </div>
    </div>
  ));

  return <div>{items}</div>;
}

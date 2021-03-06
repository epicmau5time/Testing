import React, { useState, useEffect } from "react";

export default function ApiTest() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();
        const final = data.map((item) => ({ ...item, votes: 0 }));
        setContent(final);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
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

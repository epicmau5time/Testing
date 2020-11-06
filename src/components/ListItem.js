import React from "react";

export default function Item({ content, setContent }) {
  const upVote = (id) => (e) => {
    setContent((c) =>
      c.map((c) => {
        if (c.id === id) {
          return { ...c, votes: c.votes + 1 };
        } else {
          return c;
        }
      })
    );
  };

  const downVote = (id) => (e) => {
    setContent((c) =>
      c.map((c) => {
        if (c.id === id) {
          return { ...c, votes: c.votes - 1 };
        } else {
          return c;
        }
      })
    );
  };

  const items = content.map((c, i) => (
    <div key={c.id}>
      <h3>{c.title}</h3>
      <div>
        <p>ID: {c.id}</p>
        <p>User ID: {c.userId}</p>
        <p>Body: {c.body}</p>
        <div>
          <button onClick={upVote(c.id)}>+</button>
          <span>Votes: {c.votes}</span>
          <button onClick={downVote(c.id)}>-</button>
        </div>
      </div>
    </div>
  ));

  return items;
}

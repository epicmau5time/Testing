import React, { useState, useRef, useEffect } from "react";

function ApiTest() {
  const [items, setItems] = useState([]);
  const [vote, setVote] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setItems(data);
        setVote(() => {
          const vote = new Array(data.length);
          vote.forEach((v) => (v = 0));
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  });
}

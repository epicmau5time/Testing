import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

export default function DataContainer() {
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
    console.log("fetch");

    fetchApi();
  }, []);

  return (
    <div>
      <ListItem content={content} setContent={setContent} />
    </div>
  );
}

import React from "react";
import ListItem from "../components/ListItem";
import useFetch from "../FetchApi";

const URL = "https://jsonplaceholder.typicode.com/posts";

export default function DataContainer() {
  const [data, setData] = useFetch(URL);

  return <div>{data && <ListItem content={data} setContent={setData} />}</div>;
}

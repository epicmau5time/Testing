import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const final = data.map((item) => ({ ...item, votes: 0 }));
        setData(final);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url, setData]);

  return [data, setData];
}

import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, render) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios.get(url).then((resp) => {
      const fetchedData = resp.data;
      setData(fetchedData);
    }).catch((error) => setError(error));
  }, [render, url]);

  return { data, error };
};

export default useFetch;

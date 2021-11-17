import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, render) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((resp) => {
      const fetchedData = resp.data;
      setData(fetchedData);
    });
  }, [render]);

  return { data };
};

export default useFetch;

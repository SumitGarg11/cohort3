import React, { useEffect, useState } from "react";

function useFetchData(url) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const resut = await res.json();
      setPost(resut);
    }
    fetchData();
  }, [url]);
  return { post };
}

export default useFetchData;

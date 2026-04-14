import React, { useEffect, useState } from "react";

const useData = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      //   console.log(data);
      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 200);
    };
    fetchData();
  }, []);

  return { friends, loading };
};

export default useData;

import React, { useEffect, useState } from "react";
import FriendCard from "../Ui/FriendCard";

const YourFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      //   console.log(data);
      setFriends(data);
    };
    fetchData();
  }, []);

  //   console.log(friends);

  return (
    <div className="container mx-auto mb-10">
      <div className="w-10/12 mx-auto">
        <h2 className="text-2xl font-bold">Your Friends</h2>

        {/* dynamic card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {friends.map((friend) => {
            return <FriendCard friend={friend} key={friend.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default YourFriends;

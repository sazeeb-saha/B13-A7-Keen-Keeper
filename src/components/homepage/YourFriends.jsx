import React, { useEffect, useState } from "react";

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
        <p>Total Friends: {friends.length}</p>

        {/* dynamic card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {friends.map((friend) => {
            return (
              <div
                key={friend.id}
                className="bg-white p-6 rounded-xl flex flex-col justify-center items-center text-center  shadow "
              >
                <div>
                  <img className="rounded-full" src={friend.picture} alt="" />
                </div>
                <div>
                  <p className="text-xl font-semibold">{friend.name}</p>
                  <p className="text-[12px] opacity-70">
                    {friend.days_since_contact}d ago
                  </p>
                  <div className="flex gap-2  ">
                    {friend.tags.map((tag, ind) => {
                      return (
                        <p
                          key={ind}
                          className=" bg-green-200 rounded-xl px-2 text-green-900 font-medium"
                        >
                          {tag}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex justify-center items-center">
                    <p
                      className={`${friend.status === "overdue" ? "bg-red-700 text-white font-medium rounded-xl w-fit px-2 " : friend.status === "on track" ? "bg-green-900 text-white font-medium rounded-xl w-fit px-2 " : "bg-amber-500 text-white font-medium rounded-xl w-fit px-2 "}`}
                    >
                      {friend.status}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YourFriends;

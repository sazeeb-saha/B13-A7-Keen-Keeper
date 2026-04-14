import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white p-6 rounded-xl flex flex-col justify-center items-center text-center  shadow ">
      <div>
        <img className="rounded-full" src={friend.picture} alt="" />
      </div>
      <div className="space-y-2">
        <p className="text-xl font-semibold">{friend.name}</p>
        <p className="text-[12px] opacity-70">
          {friend.days_since_contact}d ago
        </p>
        <div className="flex gap-2  justify-center items-center ">
          {friend.tags.map((tag, ind) => {
            return (
              <p
                key={ind}
                className=" uppercase text-[12px] bg-green-200 rounded-xl px-2 text-green-900 font-medium"
              >
                {tag}
              </p>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <p
            className={` capitalize text-[12px] ${friend.status === "overdue" ? "bg-red-700 text-white font-medium rounded-xl w-fit px-2 " : friend.status === "on track" ? "bg-green-900 text-white font-medium rounded-xl w-fit px-2 " : "bg-amber-500 text-white font-medium rounded-xl w-fit px-2 "}`}
          >
            {friend.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;

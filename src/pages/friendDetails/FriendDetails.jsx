import React, { useContext } from "react";
import { useParams } from "react-router";
import useData from "../../hooks/useData";
import { PropagateLoader } from "react-spinners";
import { PiPhoneCallBold } from "react-icons/pi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { CheckInContext } from "../../context/CheckInProvider";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { checkInFriends, setCheckInFriends } = useContext(CheckInContext);

  // console.log(checkIn);

  const { id } = useParams();
  // console.log(id);
  const { friends, loading } = useData();
  if (loading) {
    return (
      <div className="flex justify-center items-center my-80">
        <PropagateLoader color="#244d3f" />
      </div>
    );
  }

  const expectedFriend = friends.find((friend) => friend.id === Number(id));
  //   console.log(expectedFriend);

  const handleCheckIn = (type) => {
    const newEvent = {
      id: Date.now(),
      friendId: expectedFriend.id,
      name: expectedFriend.name,
      type: type,
      time: new Date().toISOString(),
    };

    setCheckInFriends([...checkInFriends, newEvent]);

    if (type === "Call") {
      toast.success(`Called ${expectedFriend.name} `, {
        hideProgressBar: true,
        position: "top-center",
        style: {
          background: "rgba(34, 197, 94, 0.2)",
          backdropFilter: "blur(10px)",
          color: "#166534",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "20px",
        },
      });
    } else if (type === "Text") {
      toast.success(`Texted ${expectedFriend.name} `, {
        hideProgressBar: true,
        position: "top-center",
        style: {
          background: "rgba(34, 197, 94, 0.2)",
          backdropFilter: "blur(10px)",
          color: "#166534",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "20px",
        },
      });
    } else {
      toast.success(`Video Called ${expectedFriend.name} `, {
        hideProgressBar: true,
        position: "top-center",
        style: {
          background: "rgba(34, 197, 94, 0.2)",
          backdropFilter: "blur(10px)",
          color: "#166534",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "20px",
        },
      });
    }
  };

  return (
    <div className="container mx-auto mt-20 mb-20">
      <div className=" w-10/12 mx-auto">
        {/* upper */}
        <div className="grid grid-cols-3 gap-6">
          {/* card */}
          <div>
            <div className="bg-white p-6 rounded-xl flex flex-col justify-center items-center text-center  shadow col-span-1 ">
              <div>
                <img
                  className="rounded-full"
                  src={expectedFriend.picture}
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold">{expectedFriend.name}</p>
                <div className="flex justify-center items-center">
                  <p
                    className={` capitalize text-[12px] ${expectedFriend.status === "overdue" ? "bg-red-700 text-white font-medium rounded-xl w-fit px-2 " : expectedFriend.status === "on track" ? "bg-green-900 text-white font-medium rounded-xl w-fit px-2 " : "bg-amber-500 text-white font-medium rounded-xl w-fit px-2 "}`}
                  >
                    {expectedFriend.status}
                  </p>
                </div>

                <div className="flex gap-2  justify-center items-center ">
                  {expectedFriend.tags.map((tag, ind) => {
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
                <div>
                  <q className="opacity-70 italic font-medium">
                    {expectedFriend.bio}
                  </q>
                  <p className="opacity-70">
                    Preferred: {expectedFriend.email}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 space-y-4">
              <button className="btn border-0 shadow bg-white rounded-xl   w-full">
                {" "}
                <HiOutlineBellSnooze />
                Snooze 2 weeks{" "}
              </button>
              <button className="btn border-0 shadow bg-white rounded-xl  w-full">
                {" "}
                <LuArchive /> Archive{" "}
              </button>
              <button className="btn border-0 shadow bg-white rounded-xl  w-full text-red-500  ">
                <RiDeleteBinLine /> Delete
              </button>
            </div>
          </div>
          {/* more details */}
          <div className="col-span-2 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center shadow bg-white px-4 py-8 w-full">
                <p className="text-3xl font-semibold">
                  {expectedFriend.days_since_contact}
                </p>
                <p className="text-lg opacity-70">Days Since Contact</p>
              </div>
              <div className="text-center shadow bg-white px-4 py-8 w-full">
                <p className="text-3xl font-semibold">{expectedFriend.goal}</p>
                <p className="text-lg opacity-70"> Goal(Days)</p>
              </div>
              <div className="text-center shadow bg-white px-4 py-8 w-full ">
                <p className="text-3xl font-semibold">
                  {expectedFriend.next_due_date}
                </p>
                <p className="text-lg opacity-70">Next Due</p>
              </div>
            </div>
            <div className=" shadow bg-white px-4 py-6 w-full relative">
              <p className="text-xl font-medium opacity-75">
                Relationship Goal
              </p>
              <p className="text-lg opacity-70">
                Contact Every{" "}
                <span className="font-bold text-black">
                  {" "}
                  {expectedFriend.goal} Days
                </span>
              </p>
              <button className="btn absolute top-2 right-3">Edit</button>
            </div>
            <div className="bg-white shadow p-6">
              <h2 className="text-xl font-medium mb-1">Quick Check-In</h2>
              <div className="grid grid-cols-3 gap-6">
                <div
                  onClick={() => handleCheckIn("Call")}
                  className="btn p-6 flex-col h-fit text-lg  "
                >
                  <PiPhoneCallBold className="text-4xl" /> Call
                </div>
                <div
                  onClick={() => handleCheckIn("Text")}
                  className="btn p-6 flex-col h-fit text-lg "
                >
                  <MdOutlineTextsms className="text-4xl" /> Text
                </div>
                <div
                  onClick={() => handleCheckIn("Video")}
                  className="btn p-6 flex-col h-fit text-lg "
                >
                  <IoVideocamOutline className="text-4xl" />
                  <p>Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;

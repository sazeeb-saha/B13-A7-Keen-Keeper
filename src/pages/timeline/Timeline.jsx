import React, { useContext } from "react";
import { CheckInContext } from "../../context/CheckInProvider";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import EmptyTimeline from "../../components/Ui/EmptyTimeline";

const Timeline = () => {
  const { checkInFriends } = useContext(CheckInContext);
  console.log(checkInFriends);

  return (
    <div className="container mx-auto mt-10 mb-10 space-y-4">
      <div className="w-10/12 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Timeline</h2>

        {checkInFriends.length === 0 ? (
          <EmptyTimeline />
        ) : (
          checkInFriends.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-xl p-4 border border-gray-200 flex items-center gap-6 mb-2.5"
            >
              {/* Action */}
              <div className="text-5xl">
                {item.type === "Call" ? (
                  <BiSolidPhoneCall />
                ) : item.type === "Text" ? (
                  <BsChatLeftTextFill />
                ) : (
                  <FaVideo />
                )}
              </div>

              <div>
                <p className="text-lg font-semibold">
                  {item.type === "Call" && "  Called"}
                  {item.type === "Text" && "Texted"}
                  {item.type === "Video" && "Video Called"} with
                  <span className="text-green-700"> {item.name}</span>
                </p>

                {/* Time */}
                <p className="text-sm opacity-70 mt-1">
                  {new Date(item.time).toLocaleString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>

    // <div>
    //   {checkInFriends.map((friend, ind) => (
    //     <div key={ind}>
    //       <p> with {friend.name}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Timeline;

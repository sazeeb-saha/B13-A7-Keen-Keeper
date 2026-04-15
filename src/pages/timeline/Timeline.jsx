import React, { useContext, useState } from "react";
import { CheckInContext } from "../../context/CheckInProvider";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import EmptyTimeline from "../../components/Ui/EmptyTimeline";
import { RiArrowDropDownLine } from "react-icons/ri";

const Timeline = () => {
  const { checkInFriends } = useContext(CheckInContext);
  // console.log(checkInFriends);

  const [filterType, setFilterType] = useState("All");
  const filteredData =
    filterType === "All"
      ? checkInFriends
      : checkInFriends.filter((item) => item.type === filterType);

  return (
    <div className="container min-h-[60vh] mx-auto mt-10 mb-10 space-y-4">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col mb-5">
          <div>
            <h2 className="text-5xl font-bold mb-4">Timeline </h2>
          </div>
          <div>
            <div className="dropdown dropdown-start w-52">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 flex justify-between items-center"
              >
                <p>Filter Timeline ({filterType}) </p>

                <RiArrowDropDownLine />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li onClick={() => setFilterType("All")}>
                  <a>All</a>
                </li>
                <li onClick={() => setFilterType("Call")}>
                  <a>Call</a>
                </li>
                <li onClick={() => setFilterType("Text")}>
                  <a>Text</a>
                </li>
                <li onClick={() => setFilterType("Video")}>
                  <a>Video</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {checkInFriends.length === 0 ? (
          <EmptyTimeline />
        ) : (
          filteredData.map((item) => (
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

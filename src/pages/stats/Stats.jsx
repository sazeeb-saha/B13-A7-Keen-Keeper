import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { CheckInContext } from "../../context/CheckInProvider";

const Stats = () => {
  const { checkInFriends } = useContext(CheckInContext);

  const callCount = checkInFriends.filter(
    (item) => item.type === "Call",
  ).length;

  const textCount = checkInFriends.filter(
    (item) => item.type === "Text",
  ).length;

  const videoCount = checkInFriends.filter(
    (item) => item.type === "Video",
  ).length;

  const data = [
    { name: "Call", value: callCount, fill: "#244d3f" },
    { name: "Text", value: textCount, fill: "#7f37f5" },
    { name: "Video", value: videoCount, fill: "#37a163" },
  ];

  return (
    <div className="my-20 container  mx-auto">
      <div className="w-10/12 mx-auto">
        <h2 className="text-5xl font-bold">Friendship Analytics</h2>
        <div className=" p-4 bg-white shadow mt-5">
          <h2 className="text-xl font-medium opacity-60 mb-5">
            By Interaction Type
          </h2>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "350px",
              maxHeight: "60vh",
              margin: "auto",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;

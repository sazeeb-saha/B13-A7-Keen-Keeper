import React from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="text-center w-10/12 mx-auto flex flex-col items-center gap-4 ">
        <h1 className="text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="opacity-55 max-w-160">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn flex items-center gap-2 py-2 px-3 bg-green-900 rounded text-white font-medium w-fit">
          <IoMdAdd /> Add A Friend
        </button>
      </div>
      <div className="w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-between mt-10">
        <div className="text-center shadow bg-white px-4 py-8 w-full ">
          <h2 className="font-semibold text-3xl mb-2 ">10</h2>
          <p>Total friends</p>
        </div>
        <div className="text-center shadow bg-white px-4 py-8 w-full">
          <h2 className="font-semibold text-3xl mb-2 ">03</h2>
          <p>On Track</p>
        </div>
        <div className="text-center shadow bg-white px-4 py-8 w-full ">
          <h2 className="font-semibold text-3xl mb-2 ">06</h2>
          <p>Need Attention</p>
        </div>
        <div className="text-center shadow bg-white px-4 py-8 w-full ">
          <h2 className="font-semibold text-3xl mb-2 ">12</h2>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

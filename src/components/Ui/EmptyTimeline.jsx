import { FiClock } from "react-icons/fi";
import { Link } from "react-router";

const EmptyTimeline = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center p-6 rounded-2xl bg-white shadow-md max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-blue-100 rounded-full">
            <FiClock className="text-blue-500 text-4xl" />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800">
          No Timeline Data Found
        </h2>

        <p className="text-gray-500 mt-2 mb-5 text-sm">
          Your timeline is empty right now. Start adding activities to see them
          here.
        </p>

        <Link
          to={"/"}
          className=" px-5 py-2 bg-green-900 text-white rounded-lg hover:bg-green-700 font-semibold transition"
        >
          Add First Activity
        </Link>
      </div>
    </div>
  );
};

export default EmptyTimeline;

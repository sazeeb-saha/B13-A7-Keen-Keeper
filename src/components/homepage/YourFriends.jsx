import FriendCard from "../Ui/FriendCard";
import { PropagateLoader } from "react-spinners";
import useData from "../../hooks/useData";

const YourFriends = () => {
  const { friends, loading } = useData();

  return (
    <div className="container mx-auto mb-10">
      <div className="w-10/12 mx-auto">
        <h2 className="text-2xl font-bold">Your Friends</h2>

        {/* dynamic card */}
        {loading ? (
          <div className="flex justify-center items-center my-30">
            <PropagateLoader color="#244d3f" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {friends.map((friend) => {
              return <FriendCard friend={friend} key={friend.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourFriends;

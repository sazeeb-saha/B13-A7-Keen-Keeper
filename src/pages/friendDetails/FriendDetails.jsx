import React from "react";
import { useParams } from "react-router";

const FriendDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>friend details page </div>;
};

export default FriendDetails;

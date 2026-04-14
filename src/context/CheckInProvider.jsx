import React, { createContext, useState } from "react";
import { getAllFromLocalDB } from "../utils/localDB";

export const CheckInContext = createContext([]);

const CheckInProvider = ({ children }) => {
  const [checkInFriends, setCheckInFriends] = useState(() =>
    getAllFromLocalDB(),
  );
  const data = {
    checkInFriends,
    setCheckInFriends,
  };
  return (
    <CheckInContext.Provider value={data}>{children} </CheckInContext.Provider>
  );
};

export default CheckInProvider;

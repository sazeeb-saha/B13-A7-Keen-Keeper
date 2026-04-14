import React, { createContext, useState } from "react";

export const CheckInContext = createContext([]);

const CheckInProvider = ({ children }) => {
  const [checkInFriends, setCheckInFriends] = useState([]);
  const data = {
    checkInFriends,
    setCheckInFriends,
  };
  return (
    <CheckInContext.Provider value={data}>{children} </CheckInContext.Provider>
  );
};

export default CheckInProvider;

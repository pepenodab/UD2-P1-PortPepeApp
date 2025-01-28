import { useState } from "react";

import React from "react";
import { UserTokenContext } from "../context/UserTokenContext";

type userTokenProviderProps = {
  children: React.ReactNode;
};

const UserTokenProvider = ({ children }: userTokenProviderProps) => {
  const [userToken, handleToken] = useState("");

  const handleUserToken = (token: string) => {
    handleToken(token);
  };

  return (
    <UserTokenContext.Provider value={{ userToken, handleUserToken }}>
      {children}
    </UserTokenContext.Provider>
  );
};

export default UserTokenProvider;

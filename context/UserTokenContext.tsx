import { createContext } from "react";

type userTokenType = {
  userToken: string;
  handleUserToken: Function;
};

export const UserTokenContext = createContext<userTokenType>({
  userToken: "",
  handleUserToken: () => {},
});

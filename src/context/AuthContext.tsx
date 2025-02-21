"use client";

import { requestHandler } from "@/helpers/requestHandler";
import { requestType, userType } from "@/utilities/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type AuthContextValuesType = {
  user: userType;
  setUser: Dispatch<SetStateAction<userType>>;
  requestState: requestType;
};

type AuthContextProviderType = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextValuesType);

const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  // States
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    firstLogin: "",
    address: "",
    state: "",
  });
  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });

  //   Requests
  const getUser = () => {
    requestHandler({
      url: "/auth/profile",
      method: "GET",
      state: requestState,
      setState: setRequestState,
      successFunction(res) {
        console.log(res);
      },
      errorFunction(err) {
        console.log(err);
      },
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, requestState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

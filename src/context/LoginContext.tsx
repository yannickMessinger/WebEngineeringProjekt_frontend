import React, { useCallback, useMemo, useState } from "react";

interface LoginProps {
  logIn: (firstName: string, lastName: string) => void;
  logOut: () => void;
  isLoggedIn: boolean;
}

type Props = {
  children: React.ReactNode;
};

export const LoginContext = React.createContext<LoginProps>({
  logIn: () => {},
  logOut: () => {},
  isLoggedIn: false,
});

export function LoginContextProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");

  const logIn = useCallback((firstName: string, lastName: string) => {
    //console.log(`f: ${firstName} l:${lastName} is ${isLoggedIn}`);
    setFirstname(firstName);
    setLastName(lastName);
    setIsLoggedIn(true);
  }, []);

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      logIn,
      logOut,
    }),
    [isLoggedIn]
  );

  console.log(`User f: ${firstName} l:${lastName} is ${isLoggedIn}`);

  
  return (
    <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>
  );
}

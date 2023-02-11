import React, { useCallback, useMemo, useState } from "react";

interface LoginProps {
  logIn: (firstName: string, lastName: string,birthday:string, adress:string, phoneNumber:string) => void;
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
  const [birthday, setBirthday] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  
  
  
  
  const logIn = useCallback((firstName: string, lastName: string, birthday:string, adress:string, phoneNumber:string ) => {
  
    setFirstname(firstName);
    setLastName(lastName);
    setBirthday(birthday);
    setAdress(adress)
    setPhoneNumber(phoneNumber)

    setIsLoggedIn(true);
  }, []);

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
    setFirstname('');
    setLastName('');
    setBirthday('');
    setAdress('')
    setPhoneNumber('')  
  
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      logIn,
      logOut,
    }),
    [isLoggedIn,logIn,logOut]
  );

  console.log(`User ${firstName} ${lastName}, ${birthday}, ${adress}, ${phoneNumber}, is logged in: ${isLoggedIn}`)

  
  return (
    <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>
  );
}

import React, { useCallback, useMemo, useState } from "react";

interface LoginProps {
  logIn: (firstName: string, lastName: string, userName: string, birthday:string, adress:string, phoneNumber:string) => void;
  logOut: () => void;
  isLoggedIn: boolean;
  updateScore:(points:number) => void
}

type Props = {
  children: React.ReactNode;
};

export const LoginContext = React.createContext<LoginProps>({
  logIn: () => {},
  logOut: () => {},
  isLoggedIn: false,
  updateScore:() => {}
});

export function LoginContextProvider({ children }: Props) {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const[userName, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [score, setScore] = useState(0);

    
  const updateScore = useCallback((points:number) =>{
    setScore(score + points)
  },[score])
  
  
  
  const logIn = useCallback((firstName: string, lastName: string, userName:string, birthday:string, adress:string, phoneNumber:string ) => {
  
    setFirstname(firstName);
    setLastName(lastName);
    setUserName(userName);
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
      score,
      updateScore
    }),
    [isLoggedIn,logIn,logOut,score,updateScore]
  );

  console.log(`User ${firstName} ${lastName}, ${userName}, ${birthday}, ${adress}, ${phoneNumber}, is logged in: ${isLoggedIn}`)

  
  return (
    <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>
  );
}

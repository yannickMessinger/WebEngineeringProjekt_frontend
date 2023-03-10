import React, { useCallback, useMemo, useState } from "react";
/**
 * Context that shares user information throughtout application.
 * Saves user score, user information from form and if user is logged in or not.
 */
interface LoginProps {
  logIn: (
    firstName: string,
    lastName: string,
    userName: string,
    birthday: string,
    adress: string,
    phoneNumber: string
  ) => void;
  logOut: () => void;
  isLoggedIn: boolean;
  score: number;
  updateScore: (points: number) => void;
  resetScore: () => void;
}

type Props = {
  children: React.ReactNode;
};

export const LoginContext = React.createContext<LoginProps>({
  logIn: () => {},
  logOut: () => {},
  isLoggedIn: false,
  score: 0,
  updateScore: () => {},
  resetScore: () => {},
});

export function LoginContextProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [score, setScore] = useState(0);

  const updateScore = useCallback(
    (points: number) => {
      setScore(score + points);
    },
    [score]
  );

  const resetScore = () => {
    setScore(0);
  }

  const logIn = useCallback(
    (
      firstName: string,
      lastName: string,
      userName: string,
      birthday: string,
      adress: string,
      phoneNumber: string
    ) => {
      setFirstname(firstName);
      setLastName(lastName);
      setUserName(userName);
      setBirthday(birthday);
      setAdress(adress);
      setPhoneNumber(phoneNumber);

      setIsLoggedIn(true);
    },
    []
  );

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
    setFirstname("");
    setLastName("");
    setBirthday("");
    setAdress("");
    setPhoneNumber("");
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      logIn,
      logOut,
      score,
      updateScore,
      resetScore,
    }),
    [isLoggedIn, logIn, logOut, score, updateScore]
  );

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}

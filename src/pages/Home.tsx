import React from "react";
import { useUser } from "../hooks/useUser";
import { Header } from "../layouts/Header/Header";
import { Menu } from "../components/Menu/Menu";

export const Home = () => {
    const { loggedIn } = useUser();

  //   if(!loggedIn) {
  //       return (
  //           <Signup />
  //       )
  //   }

  return (
    <>
      <Header />
      <Menu />
    </>
  );
};

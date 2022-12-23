import React from "react";
import { redirect } from "react-router-dom";
import { RouterButton } from "../components/Menu/RouterButton";
import { useUser } from "../hooks/useUser";
import { Header } from "../layouts/Header/Header";
import { MenuButton } from "../components/Menu/MenuButton";
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

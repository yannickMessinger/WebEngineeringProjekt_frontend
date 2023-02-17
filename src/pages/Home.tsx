import React, { useContext } from "react";
import { Menu } from "../components/Menu/Menu";
import { CharacterChoice } from "./CharacterCoice/CharacterChoice";
import { LoginContext } from "../context/LoginContext";
import { Navigate } from "react-router";

interface IProps {
    isLoggedIn: boolean;
}

export const Home = ({ isLoggedIn }: IProps) => {
    if (!isLoggedIn) {
        return <Navigate to={"/characterchoice"} />;
    }

    return (
        <>
            <Menu />
        </>
    );
};

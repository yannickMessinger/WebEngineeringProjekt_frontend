import React, { useContext } from "react";
import { useUser } from "../hooks/useUser";
import { Menu } from "../components/Menu/Menu";
import { CharacterChoice } from "./CharacterCoice/CharacterChoice";
import { LoginContext } from "../context/LoginContext";

export const Home = () => {
    const { isLoggedIn } = useContext(LoginContext);

    if (!isLoggedIn) {
        return <CharacterChoice />;
    }

    return (
        <>
            <Menu />
        </>
    );
};

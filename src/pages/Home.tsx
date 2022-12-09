import React from "react";
import { redirect } from "react-router-dom";
import { RouterButton } from "../components/Menu/RouterButton";
import { useUser } from "../hooks/useUser";

export const Home = () => {
    const {loggedIn} = useUser();

    // if(!loggedIn) {
    //     return (
    //         redirect("/login")
    //     )
    // }
    
    return (
        <RouterButton display={"Quiz"} to={"/quiz"} />  
    )
}
import React, { useState } from "react";

export const useUser = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [score, setScore] = useState(0);

    const updateScore = (points:number) => {
        setScore(score + points)
    }

    return {
        loggedIn,
        setLoggedIn,
        username,
        setUsername,
        score,
        updateScore,
    }
}

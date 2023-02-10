import React from "react";
import { Link, redirect } from "react-router-dom";

interface RouterButtonProps {
    display: string;
    to: string;
}

export const RouterButton = ({ display, to }: RouterButtonProps) => {
    return (
        <Link to={to}>
            <button>{display}</button>
        </Link>
    );
};

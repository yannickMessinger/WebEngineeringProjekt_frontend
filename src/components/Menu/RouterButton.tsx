import React from "react";
import { Link, redirect } from "react-router-dom";

interface RouterButtonProps {
    display: string,
    to: string
}

export const RouterButton = ({display, to}: RouterButtonProps) => {

    return (
        <button>
            <Link to={to}>
                {display}
            </Link>
        </button>
    )
}
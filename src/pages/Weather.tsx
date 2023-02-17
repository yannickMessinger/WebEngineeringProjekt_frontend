import React from "react";
import { WeatherScreen } from "../components/Weather/WeatherScreen/WeatherScreen";
import { Navigate } from "react-router";

interface IProps {
    isLoggedIn: boolean;
}

export const Weather = ({ isLoggedIn }: IProps) => {
    if (!isLoggedIn) {
        return (
            <Navigate to="/" replace />
        )
    }
    return (
        <WeatherScreen/>
    )
}
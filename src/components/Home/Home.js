import React from "react";
import "./home.scss";
import { HomeHeader } from "../HomeHeader/HomeHeader";
import { ThreeColumns } from "../ThreeColumns/ThreeColumns";

export const Home = () => {
    return (
        <div className="home">
            <HomeHeader />
            <ThreeColumns />
        </div>
    );
}
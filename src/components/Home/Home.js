import React from "react";
import "./home.scss";
import { HomeHeader } from "../HomeHeader/HomeHeader";
import { ThreeColumns } from "../ThreeColumns/ThreeColumns";
import { SimpleSteps } from "../SimpleSteps/SimpleSteps";
import { About } from "../About/About";

export const Home = () => {
    return (
        <div className="home">
            <HomeHeader />
            <ThreeColumns />
            <SimpleSteps />
            <About />
        </div>
    );
}
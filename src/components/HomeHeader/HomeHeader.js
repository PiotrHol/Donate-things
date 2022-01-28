import React from "react";
import "./homeHeader.scss";
import { Navigation } from "../Navigation/Navigation";

export const HomeHeader = () => {
    return (
        <div className="home-header">
            <Navigation />
        </div>
    );
}
import React from "react";
import "../../scss/authPage.scss";
import { Navigation } from "../Navigation/Navigation";
import { Authorization } from "../Authorization/Authorization";

export const SignUp = () => {
    return (
        <div className="auth-page">
            <Navigation inHomePage={false} />
            <div className="auth-page__auth-box">
                <Authorization isSignUp={true} />
            </div>
        </div>
    );
}
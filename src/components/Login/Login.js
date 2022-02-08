import React, { useState } from "react";
import "../../scss/authPage.scss";
import { Navigation } from "../Navigation/Navigation";
import { Authorization } from "../Authorization/Authorization";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();
  const { reset } = useForm();

  const logInHandler = ({ email, password }) => {
    const auth = getAuth();

    setPersistence(auth, browserSessionPersistence).then(async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        history.push("/");
      } catch {
        setLoginError(true);
      }
    });

    reset();
  };

  return (
    <div className="auth-page">
      <Navigation inHomePage={false} />
      <div className="auth-page__auth-box">
        <Authorization
          isSignUp={false}
          onSubmit={logInHandler}
          loginError={loginError}
        />
      </div>
    </div>
  );
};

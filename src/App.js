import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { Home } from "./components/Home/Home";
import "./scss/main.scss";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { LogOut } from "./components/LogOut/LogOut";
import { FormPage } from "./components/FormPage/FormPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserData, removeUserData } from "./actions/authActions";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        dispatch(setUserData(user.email));
      }
      else {
        dispatch(removeUserData());
      }
    });

    return () => unsubscribe()
  }, [])
  

  return (
    <HashRouter basename="/">
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/logowanie">
            <Login />
          </Route>
          <Route path="/rejestracja">
            <SignUp />
          </Route>
          <Route path="/wylogowano">
            <LogOut />
          </Route>
          <PrivateRouter path="/oddaj-rzeczy">
            <FormPage />
          </PrivateRouter>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

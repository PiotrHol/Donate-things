import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { Home } from "./components/Home/Home";
import "./scss/main.scss";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { LogOut } from "./components/LogOut/LogOut";

export const App = () => {
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
            Formularz
          </PrivateRouter>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
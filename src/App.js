import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { Home } from "./components/Home/Home";
import "./scss/main.scss";

export const App = () => {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/logowanie">
            Logowanie
          </Route>
          <Route path="/rejestracja">
            Rejestracja
          </Route>
          <Route path="/wylogowano">
            Wylogowano
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
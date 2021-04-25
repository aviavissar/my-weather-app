import React, { useState } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Favorites from "../components/FavoritesPageComponents/FavoritesPage/FavoritesPage.component";
import Home from "../components/HomePageComponents/Home/Home.component";
import Header from "../components/AllPageComponents/Header/Header.component";
import NotFoundPage from "../components/AllPageComponents/NotFoundPage/NotFoundPage.component";

export const history = createBrowserHistory();

const MainRouter = ({ hideLoader }) => {
  const [theme, setTheme] = useState("light");
  const [bool, setBool] = useState(true);

  const handleChange = (event) => {
    if (bool) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setBool(!bool);
  };
  return (
    <div className={`site-content container ${theme}`}>
      <Router history={history}>
        <div>
          <Header handleChange={handleChange}>dffdf</Header>
          <Switch>
            <Route path="/" exact={true}>
              <Home hideLoader={hideLoader} />
            </Route>
            <Route path="/home">
              <Home hideLoader={hideLoader} />
            </Route>
            <Route path="/favorites">
              <Favorites hideLoader={hideLoader} />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default MainRouter;

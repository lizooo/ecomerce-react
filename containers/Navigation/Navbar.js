import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { NavigationWrapper } from "./Navigation.styled";
import Filters from "../../components/Filter/Filters";
import Genres from "../../components/Genre/Genres";
import MovieDetails from "../../containers/Movie/MovieDetails";
import Home from "../Home/Home"
import { MoviesContext } from "../../components/Contexts/Context";
import { movies } from "../../components/Card/Cards";

function Navigation() {
  const [loading, setLoading] = useState(false);
  return (
    <Router>
      <NavigationWrapper>
        <MoviesContext.Provider value={{ allMovies: movies }}>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="selected">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/catalog" activeClassName="selected">
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/cart" activeClassName="selected">
                  Cart
                </NavLink>
              </li>
            </ul>
            <Switch>
              <Route path="/catalog" exact>
                <Filters />
              </Route>
              <Route path="/catalog/:name">
                <MovieDetails />
                <Genres />
              </Route>
              <Route path="/cart">
                <div>Hello it is cart</div>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
        </MoviesContext.Provider>
      </NavigationWrapper>
    </Router>
  );
}

export default Navigation;

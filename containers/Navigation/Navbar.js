import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import {NavigationWrapper} from './Navigation.styled'
import Hero from '../Hero/Hero'
import Cards from '../../components/Card/Cards'
import Filters from '../../components/Filter/Filters'
import Genres from '../../components/Genre/Genres'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import MovieDetails from '../../containers/Movie/MovieDetails'


const Navigation = () => (
  <Router>
    <NavigationWrapper>
      <ul>
          <li>
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
          </li>
          <li>
            <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/catalog" exact>
            <Filters/>
          </Route>
          <Route path="/catalog/:name">
            <MovieDetails/>
          </Route>
          <Route path="/cart">
            <div>Hello it is cart</div>
          </Route>
          <Route path="/">
            <Hero />
            <Genres />
            <MovieInfo />
            <Cards />
          </Route>
        </Switch>
    </NavigationWrapper>
  </Router>
);

export default Navigation;

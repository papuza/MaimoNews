import SearchAppBar from '../SearchAppBar/SearchAppBar';
import Home from '../Home/Home';
import Category from '../Category/Category';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      
      <Router>
      <SearchAppBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/category/:slug'>
            <Category />
          </Route>
          <Route path='*'>
            <p>Page not found</p>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

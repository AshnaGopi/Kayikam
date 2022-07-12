
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Visiblepages/Home';
import AboutUs from './pages/Visiblepages/AboutUs';
import NotFound from './pages/Visiblepages/NotFound';
import Nav from './components/Visiblecomponents/Nav';
import Login from './pages/Visiblepages/Login';
import Register from './pages/Visiblepages/Register';
import Dashboard from './pages/Studentdashboard/Dashboard';
import { useState } from 'react';

import Faculty from './pages/Visiblepages/Faculty';


function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/student/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/faculty/login">
          <Faculty />
        </Route>
        <Route path='/student/login/dashboard'><Dashboard/></Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>

  )
}
export default App;

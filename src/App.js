import React from "react";

import Register from "./components/Register";
import AdminRegister from "./components/AdminRegister";
import Loginpage from "./components/Loginpage";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import NewBooking from "./components/NewBooking";
import MyBooking from "./components/MyBooking";
import AllBooking from "./components/AllBooking";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Register}/>
          <Route path='/adminregister' component={AdminRegister}/>
          <Route path='/login' component={Loginpage}/>
          <Route path='/AdminLogin' component={AdminLogin}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/admindashboard' component={AdminDashboard}/>
          <Route path='/newbooking' component={NewBooking}/>
          <Route path='/mybooking' component={MyBooking}/>
          <Route path='/allbooking' component={AllBooking}/>
        </Switch>
      </Router>
    </div>
  );
}
import React from "react";
import { Route, Switch } from "react-router";

import Workpage from "../page/Workpage";
import Productpage from "../page/Productpage";
import Customerpage from "../page/Customerpage";
import Loginpage from "../page/Loginpage";
import State1 from "../page/RegisterPage/State1";
import State2 from "../page/RegisterPage/State2";
import HomePage from "../page/HomePage";

import Dashboard from "../page/DataPage/Dashboard";
import Expert from "../page/DataPage/Expert";
import Notification from "../page/DataPage/Notification";
import Referral from "../page/DataPage/Referral";
import Report from "../page/DataPage/Report";
import SalesManager from "../page/DataPage/SalesManager";
import Seting from "../page/DataPage/Setting";
import Technology from "../page/DataPage/Technology";
import Upgrade from "../page/DataPage/Upgrade";
import Profile from "../page/DataPage/Profile";

const Homepage = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Loginpage} />
        <Route exact path="/work" component={Workpage} />
        <Route exact path="/customer" component={Customerpage} />
        <Route exact path="/product" component={Productpage} />
        <Route exact path="/register/state1" component={State1} />
        <Route exact path="/register/state2" component={State2} />

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/expert" component={Expert} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/referral" component={Referral} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/salesManager" component={SalesManager} />
        <Route exact path="/seting" component={Seting} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/upgrade" component={Upgrade} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default Homepage;

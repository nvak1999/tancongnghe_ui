import React from "react";
import { Route, Switch } from "react-router";

import Workpage from "../page/Workpage";
import Productpage from "../page/Productpage";
import Customerpage from "../page/Customerpage";
import Loginpage from "../page/Loginpage";
import State1 from "../page/RegisterPage/State1";
import State2 from "../page/RegisterPage/State2";
import HomePage from "../page/HomePage";
import Dashboard from "../page/Dashboard";

const Homepage = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Loginpage} />
        <Route exact path="/work" component={Workpage} />
        <Route exact path="/customer" component={Customerpage} />
        <Route exact path="/product" component={Productpage} />
        <Route exact path="/register/state1" component={State1} />
        <Route exact path="/register/state2" component={State2} />
      </Switch>
    </div>
  );
};

export default Homepage;

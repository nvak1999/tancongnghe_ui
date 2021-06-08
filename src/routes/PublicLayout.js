import React from "react";
import { Route, Switch } from "react-router";
import Homepage from "../page/Homepage";
import Workpage from "../page/Workpage";
import Productpage from "../page/Productpage";
import Customerpage from "../page/Customerpage";
import Loginpage from "../page/Loginpage";
const PublicLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Loginpage} />
        <Route exact path="/login" component={Loginpage} />
        <Route exact path="/work" component={Workpage} />
        <Route exact path="/customer" component={Customerpage} />
        <Route exact path="/product" component={Productpage} />
      </Switch>
    </div>
  );
};

export default PublicLayout;

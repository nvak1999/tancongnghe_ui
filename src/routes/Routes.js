import React from "react";
import { Switch, Route } from "react-router-dom";
import PublicLayout from "./PublicLayout";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={PublicLayout} />
      </Switch>
    </div>
  );
};

export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./Homepage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default Routes;

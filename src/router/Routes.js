import React from "react";
import HomeFour from "../views/all-home-version/HomeFour";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/resume" component={HomeFour} />
s          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;

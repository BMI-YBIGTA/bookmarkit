import React, { useEffect, useState } from "react";
import DashboardPage from "./dashboard-page";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        {/* <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} /> */}
      </Switch>
    </div>
  );
}

export default App;

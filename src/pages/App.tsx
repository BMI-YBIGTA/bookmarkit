import React, { useEffect, useState } from "react";
import DashboardPage from "./dashboard-page";
import { Route, Switch } from "react-router-dom";
import SignUpPage from "./sign-up-page";
import SignInPage from "./sign-in-page";
import CategoriesPage from "./categories-page";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/category" component={CategoriesPage} />
      </Switch>
    </div>
  );
}

export default App;

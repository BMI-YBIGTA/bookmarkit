import React, { useEffect, useState } from "react";
import DashboardPage from "./dashboard-page";
import { Route, Switch } from "react-router-dom";
import SignUpPage from "./sign-up-page";
import SignInPage from "./sign-in-page";
import CategoriesPage from "./categories-page";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BLACK_COLOR } from "../assets/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d5b589",
    },
    secondary: {
      main: BLACK_COLOR,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/category" component={CategoriesPage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;

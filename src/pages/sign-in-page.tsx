import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import SignInComponent from "../components/auth/sign-in-component";

function SignInPage() {
  const classes = useStyles();

  return (
    <>
      <SignInComponent />
    </>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
  },
});

export default SignInPage;

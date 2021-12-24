import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import SignUpComponent from "../components/auth/sign-up-component";
import HeaderImg from "../assets/header.png";

function SignUpPage() {
  const classes = useStyles();
  const imgUrl = "./footer.png";

  return (
    <>
      <div>
        <img alt="bookmark" src={HeaderImg} />
      </div>

      <SignUpComponent />
    </>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
  },
});

export default SignUpPage;

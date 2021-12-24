import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Chip, Divider, Paper, Typography } from "@mui/material";

export interface IOneResultComponentProps {
  mainCategory: string;
  subCategory: string;
  title: string;
  content: string;
}
function OneResultComponent(props: IOneResultComponentProps) {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={0}>
        <Chip
          variant="outlined"
          label={props.mainCategory}
          color="primary"
          className={classes.category}
        />
        <Chip
          variant="outlined"
          label={props.subCategory}
          color="primary"
          className={classes.category}
        />
        <Typography variant="h5" className={classes.title}>
          {props.title}
        </Typography>
        <br />
        <Typography>{props.content}</Typography>
        <br />
        <Divider />
      </Paper>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
  },
  category: {
    marginRight: "1rem",
    marginBottom: "1rem",
  },
  title: {
    marginBottom: "2rem",
  },
});

export default OneResultComponent;

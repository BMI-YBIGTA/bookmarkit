import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Chip, Divider, Paper, Typography } from "@mui/material";
import { BLUE_COLOR } from "../../assets/colors";

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
        <div className={classes.content}>
          <Typography>{props.content}</Typography>
        </div>

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
    marginBottom: "1rem",
    marginTop: "2rem",
  },
  title: {
    marginBottom: "2rem",
  },
  content: {
    whiteSpace: "normal",
    overflow: "hidden",
    wordWrap: "break-word",
    textOverflow: "ellipsis",
  },
});

export default OneResultComponent;

import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AddBookmarkComponent from "../components/dashboard/add-bookmark-component";
import MenubarComponent from "../components/dashboard/menubar-component";
import Header from "../components/header/header";
import MainCategoryComponent from "../components/dashboard/main-category-component";
import RecordComponent from "../components/record/record-component";

function DashboardPage() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.firstContainer}></div>

        <div className={classes.secondContainer}>
          <MenubarComponent />
          <AddBookmarkComponent />
          <MainCategoryComponent />
        </div>
        <div className={classes.thirdContainer}>
          <RecordComponent />
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
  },
  mainContainer: {
    display: "flex",
  },
  firstContainer: {
    flex: 1,
  },
  secondContainer: {
    flex: 3,
  },
  thirdContainer: {
    flex: 1,
    width: "20%",
  },
});

export default DashboardPage;

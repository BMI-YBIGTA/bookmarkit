import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AddBookmarkComponent from "../components/dashboard/add-bookmark-component";
import MenubarComponent from "../components/dashboard/menubar-component";
import Header from "../components/header/header";
import MainCategoryComponent from "../components/dashboard/main-category-component";
import { ImageList } from "@mui/material";

const reduced = [
  {
    mainCat: "CS",
    bookmarks: [
      {
        smallCat: "OS",
        title: "제목 111"
      },
      {
        smallCat: "CA",
        title: "제목 222"
      }
    ]
  },
  {
    mainCat: "AI",
    bookmarks: [
      {
        smallCat:"ML",
        title: "머신러닝"
      },
      {
        smallCat: "DL",
        title: "딥러닝"
      }
    ]
  }
]

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
          <ImageList cols={2}>
            {reduced.map((item) => {
              return (
                <MainCategoryComponent
                  key={item.mainCat}
                  mainCat={item.mainCat}
                  bookmarks={item.bookmarks}
                />
              )
            })}
          </ImageList>
        </div>
        <div className={classes.thirdContainer}></div>
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
  },
});

export default DashboardPage;

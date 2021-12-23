import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AddBookmarkComponent from "../components/dashboard/add-bookmark-component";
import MenubarComponent from "../components/dashboard/menubar-component";
import Header from "../components/header/header";
import MainCategoryComponent from "../components/dashboard/main-category-component";

function DashboardPage() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div>
        <MenubarComponent />
        <AddBookmarkComponent />
        <MainCategoryComponent />
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
  },
});

export default DashboardPage;

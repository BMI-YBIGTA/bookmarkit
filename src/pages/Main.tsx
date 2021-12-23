import React from "react";
import AddBookmarkComponent from "../components/dashboard/add-bookmark-component";
import MenubarComponent from "../components/dashboard/menubar-component";
import Header from "../components/header/header";
import MainCategoryComponent from "../components/dashboard/main-category-component";

function Main() {

  // const classes = useStyles();

  return (
    <div>
      <Header />
      <div>
        <MenubarComponent />
        <AddBookmarkComponent />
        <MainCategoryComponent />
      </div>
    </div>
  )
}


export default Main;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import AddBookmarkComponent from "../components/dashboard/add-bookmark-component";
import MenubarComponent from "../components/dashboard/menubar-component";
import Header from "../components/header/header";
import MainCategoryComponent from "../components/dashboard/main-category-component";
import NavigationComponent from "../components/dashboard/navigation-component";
import RecordComponent from "../components/record/record-component";
import { ImageList, Typography } from "@mui/material";
import SignInComponent from "../components/auth/sign-in-component";
import { LIGHT_GREY_COLOR } from "../assets/colors";
import { fetchMainCategoryData } from "../apis";

// const before_reduce = [
//   {
//     mainCat:string,
//     smallCat: string,
//     title: string,
//     summary: string.
//     url: string
//   }
// ]

const reduced = [
  {
    mainCat: "CS",
    bookmarks: [
      {
        smallCat: "OS",
        title: "제목 111",
      },
      {
        smallCat: "CA",
        title: "제목 222",
      },
    ],
  },
  {
    mainCat: "AI",
    bookmarks: [
      {
        smallCat: "ML",
        title: "머신러닝",
      },
      {
        smallCat: "DL",
        title: "딥러닝",
      },
    ],
  },
];

export interface IsubCategory {
  [key: string]: string[];
}
interface ImainCategory {
  [key: string]: IsubCategory;
}
function DashboardPage() {
  const classes = useStyles();
  const [isToggledNavBar, setToggle] = useState(false);
  const [category, setCategory] = useState("");
  const [authed, setAuthed] = useState(false);
  const [mainCategoryData, setMainCategoryData]: [ImainCategory, Function] =
    useState({});

  useEffect(() => {
    fetchMainCategoryData(category).then((res) => setMainCategoryData(res));
  }, [category]);

  return (
    <div className={classes.root}>
      <div className={classes.naviContainer}>
        <NavigationComponent />
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.headerContainer}>
          <Header authed={authed} />
        </div>

        <div className={classes.mainContainer}>
          <div className={classes.secondContainer}>
            <div className={classes.subContainer}>
              <div className={classes.menuContainer}>
                <MenubarComponent />
              </div>

              {/* <div className={classes.addBookmarkContainer}>
                <AddBookmarkComponent />
              </div> */}
            </div>
            <ImageList cols={2}>
              {Object.entries(mainCategoryData).map(([key, value]) => {
                console.log(key, value);
                return (
                  <MainCategoryComponent
                    key={key}
                    mainCat={key}
                    bookmarks={value}
                  />
                );
              })}
            </ImageList>
          </div>
          <div className={classes.thirdContainer}>
            <RecordComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
    display: "flex",
    flexDirection: "row",
  },
  naviContainer: {
    flex: 1,
    marginRight: "20px",
    backgroundColor: LIGHT_GREY_COLOR,
  },
  bodyContainer: {
    flex: 5,
    display: "flex",
    flexDirection: "column",
  },
  mainContainer: {
    display: "flex",
    height: window.innerHeight,
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    // alignContent: "center",
    // placeContent: "center",
    color: "#39F",
    justifyContent: "center",
  },
  headerContainer: {},
  // firstContainer: {
  //   flex: 1,
  //   display: "flex",
  //   justifyContent: "center",
  //   backgroundColor: LIGHT_GREY_COLOR,
  // },
  secondContainer: {
    flex: 3,
  },
  thirdContainer: {
    flex: 1,
    width: "20%",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addBookmarkContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuContainer: {
    flex: 20,
    paddingLeft: "10px",
    paddingRight: "10px",
  },
});

export default DashboardPage;

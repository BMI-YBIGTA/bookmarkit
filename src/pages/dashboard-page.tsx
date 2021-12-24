import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import AddBookmarkComponent from "../components/dashboard/add-bookmark-component";
import MenubarComponent from "../components/dashboard/menubar-component";
import Header from "../components/header/header";
import MainCategoryComponent from "../components/dashboard/main-category-component";
import NavigationComponent from "../components/dashboard/navigation-component";
import RecordComponent, {
  EnumStatus,
} from "../components/record/record-component";
import { ImageList, List, ListItem } from "@mui/material";
import SignInComponent from "../components/auth/sign-in-component";
import { useSelector } from "react-redux";
import userReducer, { UserState } from "../stores/reducers/userReducer";
import { RootState } from "../stores/reducers";
import { LIGHT_GREY_COLOR } from "../assets/colors";
import {
  fetchMainCategoryData,
  fetchSearchData,
  IfetchMainCategoryDataProps,
  IfetchSearchDataProps,
} from "../apis";
import OneResultComponent, {
  IOneResultComponentProps,
} from "../components/search/one-result-component";
import { EnumType } from "typescript";

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

export interface IsubTitles {
  memberBookmarkI: number;
  mainCategory: string;
  subCategory: string;
  title: string;
  link: string;
  createdDate: string;
  status: string;
}
export interface IsubCategory {
  [key: string]: IsubTitles[];
}
interface ImainCategory {
  [key: string]: IsubCategory;
}
interface IsearchData {
  mainCategory: string;
  subCategory: string;
  title: string;
  link: string;
  content: string;
  status: EnumStatus;
}
function DashboardPage() {
  const classes = useStyles();
  const [isToggledNavBar, setToggle] = useState(false);
  const [category, setCategory] = useState("");
  const [authed, setAuthed] = useState(false);
  const [mainCategoryData, setMainCategoryData]: [ImainCategory, Function] =
    useState({});
  const [searchData, setSearchData]: [IsearchData[], Function] = useState([]);

  const token = JSON.parse(
    window.localStorage.getItem("userInfo") || "{}"
  ).token;

  const currentSearchText = useSelector(
    (state: RootState) => state.search.load
  );

  const fetchProps: IfetchMainCategoryDataProps = {
    token: token,
    category: category,
  };
  const fetchSearchProps: IfetchSearchDataProps = {
    token: token,
    searchText: currentSearchText,
  };
  useEffect(() => {
    fetchMainCategoryData(fetchProps).then((res) => setMainCategoryData(res));
    fetchSearchData(fetchSearchProps).then((res) => setSearchData(res));
  }, [
    category,
    currentSearchText,
    useSelector((state: RootState) => state.userReducer.loggedIn),
  ]);

  return (
    <div className={classes.root}>
      <div className={classes.naviContainer}>
        <NavigationComponent />
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.headerContainer}>
          <Header authed={token ? true : false} />
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
            {!currentSearchText && mainCategoryData ? (
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
            ) : (
              <List>
                {searchData.map((value: IsearchData) => {
                  const oneSearchProps: IOneResultComponentProps = {
                    mainCategory: value.mainCategory,
                    subCategory: value.subCategory,
                    title: value.title,
                    content: value.content,
                  };
                  return <OneResultComponent {...oneSearchProps} />;
                })}
              </List>
            )}
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

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
import { Box, ImageList, List, ListItem } from "@mui/material";
import SignInComponent from "../components/auth/sign-in-component";
import { useSelector } from "react-redux";
import userReducer, { UserState } from "../stores/reducers/userReducer";
import { RootState } from "../stores/reducers";
import { LIGHT_GREY_COLOR } from "../assets/colors";
import {
  fetchCategoriesData,
  fetchMainCategoryData,
  fetchSearchData,
  IfetchCategoriesProps,
  IfetchMainCategoryDataProps,
  IfetchRecordDataProps,
  IfetchSearchDataProps,
} from "../apis";
import OneResultComponent, {
  IOneResultComponentProps,
} from "../components/search/one-result-component";
import { EnumType } from "typescript";
import Header2 from "../components/header/header";
import CategoryComponent, {
  CategoryProps,
} from "../components/dashboard/category-component";

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
export interface ICategories {
  [key: string]: ISubCategories[];
}
export interface ISubCategories {
  mainCategory: string;
  subCategory: string;
}
function CategoriesPage() {
  const classes = useStyles();
  const [categoriesData, setCategoriesData]: [ICategories, Function] = useState(
    {}
  );

  useSelector((state: RootState) => state.userReducer.loggedIn);

  const token = JSON.parse(
    window.localStorage.getItem("userInfo") || "{}"
  ).token;

  const fetchCategorisProps: IfetchCategoriesProps = {
    token: token,
  };
  useEffect(() => {
    fetchCategoriesData(fetchCategorisProps).then((res) =>
      setCategoriesData(res)
    );
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.naviContainer}>
        <NavigationComponent />
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.headerContainer}>
          <Header2 authed={token ? true : false} />
        </div>

        <div className={classes.mainContainer}>
          <div className={classes.secondContainer}>
            {
              <ImageList
                cols={3}
                // variant="masonry"
                // className={classes.imagelist}
              >
                {Object.entries(categoriesData).map(([key, value]) => {
                  const categorycomponentprops: CategoryProps = {
                    main: key,
                    value: value,
                  };
                  return <CategoryComponent {...categorycomponentprops} />;
                })}
              </ImageList>
            }
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
    width: window.innerWidth - 300,
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
  secondContainer: {
    flex: 3,
    marginRight: "30px",
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
  searchlist: {
    whiteSpace: "normal",
    overflow: "hidden",
    wordWrap: "break-word",
    textOverflow: "ellipsis",
  },
});

export default CategoriesPage;

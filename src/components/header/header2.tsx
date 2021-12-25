import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  InputAdornment,
  Box,
  Button,
  Paper,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../stores/reducers/userReducer";
import { LOGOUT_USER } from "../../stores/actions/userAction";
import { useDispatch } from "react-redux";
import { RootState } from "../../stores/reducers";
import {
  BLUE_COLOR,
  MAIN_COLOR,
  ORANGE_10_COLOR,
  ORANGE_COLOR,
} from "../../assets/colors";
import actions from "../../stores/actions";

interface headerProps {
  authed: boolean;
}

function Header2({ authed }: headerProps) {
  const classes = useStyles();
  const [userName, setUserName] = useState("User");
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const nickname = JSON.parse(
    window.localStorage.getItem("userInfo") || "{}"
  ).name;
  useEffect(() => {
    dispatch(actions.search.setSearch(searchText));
  }, [
    useSelector((state: RootState) => state.userReducer.loggedIn),
    searchText,
  ]);

  const userSpace = () => {
    if (authed) {
      return (
        <span>
          <Typography variant="h5">
            <Box sx={{ fontWeight: "bold" }}>{nickname}님</Box>
          </Typography>
          <Button
            sx={{ fontSize: "18px" }}
            variant="text"
            color="error"
            onClick={() => {
              dispatch({ type: LOGOUT_USER });
              window.localStorage.clear();
            }}
          >
            로그아웃
          </Button>
        </span>
      );
    } else {
      return (
        <span>
          <Link to="/signin" className={classes.link}>
            <Button style={{ color: BLUE_COLOR }} sx={{ fontSize: "20px" }}>
              로그인
            </Button>
          </Link>
          <Link to="/signup" className={classes.link}>
            <Button
              sx={{ fontSize: "20px" }}
              style={{ color: BLUE_COLOR, marginLeft: "10px" }}
            >
              회원가입
            </Button>
          </Link>
        </span>
      );
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <TextField
          className={classes.secondContainer}
          // className={classes.search}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <div className={classes.thirdContainer}>{userSpace()}</div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    direction: "inherit",
    display: "flex",
    marginTop: "20px",
    marginBottom: "40px",
  },
  secondContainer: {
    flex: 3,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  thirdContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  search: {},
  userName: {
    // flexDirection: "column",
  },
  navBar: {},
  link: {
    textDecoration: "none",
    "&:visited": { textDecoration: "none" },
    "&:hover": { textDecoration: "none" },
    "&:link": { textDecoration: "none" },
  },
});

export default Header2;

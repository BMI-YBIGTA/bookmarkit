import React, { useState } from "react";
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
import {
  BLUE_COLOR,
  MAIN_COLOR,
  ORANGE_10_COLOR,
  ORANGE_COLOR,
} from "../../assets/colors";

interface headerProps {
  authed: boolean;
}

function Header({ authed }: headerProps) {
  const classes = useStyles();
  const [userName, setUserName] = useState("User");

  const userSpace = () => {
    if (authed) {
      return (
        <span>
          <Typography variant="h5">
            <Box sx={{ fontWeight: "bold" }}>{userName}님</Box>
          </Typography>
          <Button sx={{ fontSize: "18px" }} variant="text" color="error">
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
    padding: "10px",
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

export default Header;

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

function Header() {
  const classes = useStyles();
  const [userName, setUserName] = useState("User");

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.firstContainer}>
          <IconButton>
            <MenuIcon className={classes.navBar} fontSize="large" />
          </IconButton>
          <div className={classes.logo}>
            <Typography variant="h4">BookMarkit</Typography>
          </div>
        </div>
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
        <div className={classes.thirdContainer}>
          <Typography variant="h5">
            <Box sx={{ fontWeight: "bold" }}>{userName}님</Box>
          </Typography>
          <Button sx={{ fontSize: "18px" }} variant="text" color="error">
            로그아웃
          </Button>
        </div>
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
  firstContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  secondContainer: {
    flex: 3,
    padding: "10px",
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
  logo: {
    display: "flex",
    flexDirection: "column",
    // alignContent: "center",
    // placeContent: "center",
    color: "#39F",
    justifyContent: "center",
  },
  search: {},
  userName: {
    // flexDirection: "column",
  },
  navBar: {},
});

export default Header;

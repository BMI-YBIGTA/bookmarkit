import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CategoriesPage from "../../pages/categories-page";
import DashboardPage from "../../pages/dashboard-page";

interface Nprops {
  toggle: boolean;
  setToggle: Function;
}

function NavigationComponent(props: Nprops) {
  const classes = useStyles();
  const { toggle, setToggle } = props;
  console.log(toggle);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setToggle(open);
    };

  const list = () => (
    <Box
      sx={{ width: "250px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key={"My 북마크"}>
          {/* <ListItemText primary={"My 북마크"} /> */}
          <Link className={classes.link} to="/">
            MY 북마크
          </Link>
        </ListItem>
        <Divider />
        <ListItem button key={"카테고리 종류"}>
          <Link className={classes.link} to="/category">
            카테고리 종류
          </Link>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={toggle} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
    display: "flex",
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cecece",
    transition: "max - height 0.3s ease- out",
  },
  typoBox: {
    display: "flex",
    width: "90%",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  link: {
    textDecoration: "none",
    color: "black",
    marginTop: "10px",
    marginBottom: "10px",
  },
});

export default NavigationComponent;

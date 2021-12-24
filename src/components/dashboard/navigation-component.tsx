import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Divider, Drawer, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import HeaderImg from "../../assets/header.png";

function NavigationComponent() {
  const classes = useStyles();

  return (
    <Box sx={{ width: "250px" }} role="presentation">
      <List>
        <ListItem button key={"bookmark"}>
          <img className={classes.image} alt="bookmark" src={HeaderImg} />
        </ListItem>
        <ListItem button key={"My 북마크"}>
          {/* <ListItemText primary={"My 북마크"} /> */}
          <Link className={classes.link} to="/">
            MY 북마크
          </Link>
        </ListItem>
        <ListItem button key={"카테고리 종류"}>
          <Link className={classes.link} to="/category">
            카테고리 종류
          </Link>
        </ListItem>
      </List>
    </Box>
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
  image: {
    width: "200px",
    height: "auto",
  },
});

export default NavigationComponent;

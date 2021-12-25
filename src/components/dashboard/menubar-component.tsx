import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BLACK_COLOR } from "../../assets/colors";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../stores/actions";
import { RootState } from "../../stores/reducers";

const mainCategoryList = [
  "전체",
  "Computer Science",
  "Database",
  "Language",
  "AI",
  "Frontend",
  "Backend",
  "Web",
  "Data",
  "DevOps",
  "Cloud",
  "IDE",
  "Version Control System",
  "Mobile",
  "Game",
  "Embedded",
];
function MenubarComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const category = useSelector((state: RootState) => state.category.load);

  const onClickCategory = (cat: string) => {
    if (cat === "전체") {
      dispatch(actions.category.setCategory(""));
    } else {
      dispatch(actions.category.setCategory(cat));
    }
  };

  return (
    <div>
      <Accordion
        className={classes.menu}
        sx={{ border: 0.1, borderColor: "lightgray" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>카테고리 목록</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {mainCategoryList.map((item) => {
            return (
              <Button color="secondary" onClick={() => onClickCategory(item)}>
                {item}
              </Button>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
    display: "flex",
    // flex: 3
  },
  menu: {
    // display: "flex",
    flex: 3,
    // width: "100%",
    // flexDirection: "column"
  },
  buttom: {
    color: BLACK_COLOR,
  },
});

export default MenubarComponent;

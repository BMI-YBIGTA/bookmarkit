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

function MenubarComponent() {
  const classes = useStyles();

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
          <Button>전체</Button>
          <Button color="primary">OS</Button>
          <Button>CA</Button>
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
});

export default MenubarComponent;

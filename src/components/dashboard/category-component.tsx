import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import { IsubCategory, IsubTitles } from "../../pages/dashboard-page";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/reducers";
import { ISubCategories } from "../../pages/categories-page";

export interface CategoryProps {
  main: string;
  value: ISubCategories[];
}

function CategoryComponent(props: CategoryProps) {
  const classes = useStyles();
  const { main, value } = props;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Card variant="outlined" className={classes.category}>
        <CardContent>
          <Typography variant="h5" gutterBottom className={classes.mainCat}>
            {props.main}
          </Typography>
          {props.value &&
            Object.entries(props.value).map(([key, value_]) => {
              return (
                <div className={classes.bookmark} key={key}>
                  <Typography
                    variant="body2"
                    className={classes.bookmarkHeader}
                  >
                    {value_.subCategory}
                  </Typography>
                </div>
              );
            })}
        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
    padding: "10px",
  },
  category: {
    border: 3,
    boxShadow: "none",
  },
  mainCat: {
    marginBottom: "2rem",
  },
  smallCat: {
    marginBottom: "5px",
  },
  bookmark: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  setIcon: {
    alignContent: "flex-end",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "space-between",
  },
  bookmarkHeader: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default CategoryComponent;

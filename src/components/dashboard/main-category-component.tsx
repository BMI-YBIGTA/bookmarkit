import React, { useState } from "react";
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

interface MainCategoryProps {
  mainCat: string;
  bookmarks: IsubCategory;
}

function MainCategoryComponent(props: MainCategoryProps) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Card
        variant="outlined"
        className={classes.category}
        // sx={{ maxWidth: "275px" }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom className={classes.mainCat}>
            {props.mainCat}
          </Typography>
          {/* {Object.entries(props.bookmarks).map(([key, value]) => { */}
          {props.bookmarks &&
            Object.entries(props.bookmarks).map(([key, value]) => {
              console.log("data: ", key, value);
              return (
                <div key={key}>
                  <Chip
                    variant="outlined"
                    label={key}
                    color="primary"
                    className={classes.smallCat}
                  />

                  {value &&
                    Object.entries(value).map(([key, result]) => {
                      return (
                        <div className={classes.bookmark}>
                          <Typography
                            variant="body2"
                            className={classes.bookmarkHeader}
                          >
                            {result.title}
                          </Typography>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          <IconButton onClick={handleOpen}>
            <Settings className={classes.setIcon} />
          </IconButton>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>북마크 설정</DialogTitle>
            <DialogContent>
              <DialogContentText>gdgd</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>OK</Button>
              <Button onClick={handleClose} color="warning">
                취소
              </Button>
            </DialogActions>
          </Dialog>
          <Divider />
          {/* <br /> */}
          {/* </div> */}
          {/* ); */}
          {/* })} */}
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

export default MainCategoryComponent;

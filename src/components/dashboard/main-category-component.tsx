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


interface MainCategoryProps {
  mainCat: string,
  bookmarks: Array<any>,
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
    <div>
      <Card
        variant="outlined"
        className={classes.category}
        // sx={{ maxWidth: "275px" }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom className={classes.mainCat}>
            {props.mainCat}
          </Typography>
          {props.bookmarks.map((item) => {
            return (
              <div key={item.title}>
                <Chip
                  variant="outlined"
                  label={item.smallCat}
                  color="primary"
                  className={classes.smallCat}
                />
                <div className={classes.bookmark}>
                  <Typography variant="body2" className={classes.bookmarkHeader}>
                    {item.title}
                  </Typography>
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
                </div>
                <Divider />
                <br />
              </div>
            )
          })}
          
        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
  },
  category: {
    border: 3,
    boxShadow: "none",
  },
  mainCat: {
    marginBottom: "2rem"
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

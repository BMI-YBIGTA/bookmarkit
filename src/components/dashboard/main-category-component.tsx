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
} from "@mui/material";
import { Settings } from "@mui/icons-material";

function MainCategoryComponent() {
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
          <Typography variant="h5" gutterBottom>
            Main Category
          </Typography>
          <Chip
            variant="outlined"
            label="OS"
            color="primary"
            className={classes.smallCat}
          />
          <div className={classes.bookmark}>
            <Typography variant="body2" className={classes.bookmarkHeader}>
              URL 입력 어쩌구저쩌구
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
  smallCat: {
    marginBottom: "1rem",
  },
  bookmark: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
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

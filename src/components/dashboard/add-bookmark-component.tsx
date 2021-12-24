import React, { ChangeEvent, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { IpostRegisterBookmark, postRegisterBookmark } from "../../apis";
import axios from "axios";
import ReactDOM from "react-dom";

function AddBookmarkComponent() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const handleClose = () => {
    setOpen(false);
    const params: IpostRegisterBookmark = {
      memberId: "0",
      title: title,
      header: document.title,
      link: document.URL,
      content: document.body.textContent ? document.body.textContent : "",
    };
    postRegisterBookmark(params);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onAdd = (e: Event) => {};

  return (
    <>
      <IconButton onClick={handleOpen}>
        <AddCircleOutlineOutlined fontSize="large" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>북마크 추가</DialogTitle>
        <DialogContent>
          <DialogContentText>URL</DialogContentText>
          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            onChange={(e) => {
              setUrl(e.target.value);
              //   getTitle(e.target.value);
              //   getTitle(e.target.value).then((url) => {
              //     console.log(url);
              //     setTitle(url);
              //   });
            }}
          />
          <DialogContentText>이름</DialogContentText>
          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {/* <DialogContentText>대분류 선택</DialogContentText>
          <Select
            variant="outlined"
            fullWidth
            value={mainCategory}
            onChange={(e: SelectChangeEvent) => {
              setMainCategory(e.target.value);
            }}
          >
            {Object.entries(fetchData).map(([key, value]) => {
              return (
                <MenuItem
                  key={key}
                  value={key}
                  onClick={(e) => {
                    setSubCategories(value);
                  }}
                >
                  {key}
                </MenuItem>
              );
            })}
          </Select>
          <DialogContentText>소분류 선택</DialogContentText>
          <Select variant="outlined" fullWidth value={subCategory}>
            {Object.entries(subCategories).map(([key, value]) => (
              <MenuItem
                value={value}
                key={value}
                onClick={(e) => {
                  setSubCategory(value);
                }}
              >
                {value}
              </MenuItem>
            ))}
          </Select> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
          <Button onClick={handleCancel} color="warning">
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    color: "black",
  },
  select: {},
});

export default AddBookmarkComponent;
function buildTable(
  rows: any
): React.DOMElement<React.DOMAttributes<Element>, Element> {
  throw new Error("Function not implemented.");
}

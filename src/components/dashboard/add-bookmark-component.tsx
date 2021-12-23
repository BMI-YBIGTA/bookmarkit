import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, MenuItem, Select, TextField } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

function AddBookmarkComponent() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const onAdd = (e:Event) => {

    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <AddCircleOutlineOutlined fontSize="large" />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>북마크 추가</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        URL
                    </DialogContentText>
                    <TextField 
                        variant="outlined"
                        autoFocus
                        margin="dense"    
                    />
                    <DialogContentText>
                        어떤 카테고리에 추가하실?
                    </DialogContentText>
                    <Select
                        variant="outlined"
                        
                        fullWidth  
                    >
                        <MenuItem>미지정</MenuItem>
                        <MenuItem>OS</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                    <Button onClick={handleClose} color="warning">취소</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

const useStyles = makeStyles({
    root: {
        color: "black"
    },
    select: {

    }
});

export default AddBookmarkComponent;

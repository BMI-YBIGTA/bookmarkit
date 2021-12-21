import React, { useState } from "react";
import { TextField, Typography, InputAdornment, Box, Button, Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from '@mui/styles';


function Header() {
    const classes = useStyles();
    const [userName, setUserName] = useState("User");


    return (
        <div className={classes.root}>
            <Typography variant="h4" color="#39F">
                BookMarkit
            </Typography>
            <TextField 
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            variant="outlined" fullWidth />
            <Typography variant="h5" gutterBottom>
                <Box sx={{ fontWeight:'bold', }}>{userName}님, 안녕하세요!</Box>
            </Typography>
            <Button sx={{ fontSize:'15px' }} variant="text" color="error">로그아웃</Button>
            <Paper
                component="form"
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <IconButton sx={{p:'10px'}} aria-label="aaaaaaaaaaaaaaaa">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{}}
                />
            </Paper>
        </div>
    )


}

const useStyles = makeStyles({
    root: {
        direction: "inherit",
        color: "red"
    }
});

export default Header;
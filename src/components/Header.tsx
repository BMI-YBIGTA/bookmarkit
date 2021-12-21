import React, { useState } from "react";
import { TextField, Typography, InputAdornment, Box, Button, Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from '@mui/styles';


function Header() {
    const classes = useStyles();
    const [userName, setUserName] = useState("User");


    return (
        <div>
            <div className={classes.root} >
                <IconButton>
                    <MenuIcon className={classes.navBar} fontSize="large" />
                </IconButton>
                <div className={classes.logo}>
                    <Typography variant="h4" >
                        BookMarkit
                    </Typography>
                </div>
                
                <TextField className={classes.search}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                variant="outlined" />
                <Typography variant="h5" className={classes.userName}>
                    <Box sx={{ fontWeight:'bold'}}>{userName}님</Box>
                </Typography>
                <Button sx={{ fontSize:'15px' }} variant="text" color="error">로그아웃</Button>
                
            </div>
        </div>
    )


}

const useStyles = makeStyles({
    root: {
        direction: "inherit",
        display: "flex",
    },
    logo: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        // alignContent: "center",
        // placeContent: "center",
        color: "#39F",
        justifyContent: "center"
    },
    search: {
        flex: 3,
    },
    userName: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    },
    navBar: {

    }
});

export default Header;
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

function NoDataComponent() {
    const classes = useStyles();

    return (
        <>
        </>
    );
}

const useStyles = makeStyles({
    root: {
        color: "black"
    }
});

export default NoDataComponent;

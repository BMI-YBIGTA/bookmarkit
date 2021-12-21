import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

function DashboardPage() {
    const classes = useStyles();

    return (
        <>
            <div>
                메인 페이지
            </div>
        </>
    );
}

const useStyles = makeStyles({
    root: {
        color: "black"
    }
});

export default DashboardPage;

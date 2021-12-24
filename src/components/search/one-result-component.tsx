import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Chip, Divider, Paper, Typography } from "@mui/material";

function OneResultComponent() {
    const classes = useStyles();

    return (
        <>
            <Paper elevation={0}>
                <Chip
                    variant="outlined"
                    label="대분류"
                    color="primary"
                    className={classes.category}
                />
                <Chip
                    variant="outlined"
                    label="소분류"
                    color="primary"
                    className={classes.category}
                />
                <Typography variant="h5" className={classes.title}>
                    여기에 제목이 들어갑니다 ㅎㅅㅎ 제목제목제목 
                </Typography>
                <br />
                <Typography>
                    여기에 텍스트가 온다면 이런 느낌으로 온다면 좋을 것 같은데 
                    여기 URL에 들어가서 처음 몇 줄을 따오는건가 한 세 줄 정도 따온다고 하면 적당하겠지 헤헤헤 이정도면 줄이 바꼈을까
                    으으으으 왜 마진이 안들어갈까 아오 빡쳐 마진마진마진마진마지마진잠지마짐잠지ㅏㅁ자미
                    마진이 안 남는다고 마진이
                </Typography>
                <br />
                <Divider />

            </Paper>
        </>
    );
}

const useStyles = makeStyles({
    root: {
        color: "black"
    },
    category: {
        marginRight: "1rem",
        marginBottom: "1rem",

    },
    title: {
        marginBottom:"2rem"
    }
});

export default OneResultComponent;

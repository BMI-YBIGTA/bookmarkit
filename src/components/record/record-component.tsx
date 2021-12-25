import React, { Component, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Paper, Stack, Typography } from "@mui/material";
import {
  BLUE_COLOR,
  GREEN_COLOR,
  GREY_COLOR,
  LIGHT_GREY_COLOR,
  MAIN_COLOR,
} from "../../assets/colors";
import { fetchRecordData, IfetchRecordDataProps } from "../../apis/apis";

export enum EnumStatus {
  INIT = "초기화중",
  REQUESTING = "분류중",
  CLASSIFIED = "",
}
interface IrecordDateData {
  memberBookmarkId: number;
  mainCategory: string;
  subCategory: string;
  title: string;
  link: string;
  createdDate: string;
  status: EnumStatus;
}
interface IrecordData {
  [key: string]: IrecordDateData[];
}

function RecordComponent(props: IfetchRecordDataProps) {
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [recordData, setRecordData]: [IrecordData, Function] = useState({});

  const fetchRecordProps: IfetchRecordDataProps = {
    token: props.token,
  };
  useEffect(() => {
    fetchRecordData(fetchRecordProps).then((res) => setRecordData(res));
  }, []);

  return (
    <Paper className={classes.record} elevation={1}>
      <Typography className={classes.title} variant="h5">
        북마크 기록
      </Typography>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={5}
        marginTop="20px"
      >
        {recordData &&
          Object.entries(recordData).map(([key, value]) => {
            return (
              <div key={key}>
                <Typography className={classes.rowDate}>{key}</Typography>
                {Object.entries(value).map(([key_, value_]) => (
                  <div key={key_} className={classes.row}>
                    <div className={classes.rowHead}>
                      <Typography className={classes.rowCategory}>
                        {value_.mainCategory + " / " + value_.subCategory}
                      </Typography>
                      {value_.status === EnumStatus.REQUESTING ? (
                        <Typography className={classes.rowRequesting}>
                          {value_.status}
                        </Typography>
                      ) : value_.status === EnumStatus.INIT ? (
                        <Typography className={classes.rowInit}>
                          {value_.status}
                        </Typography>
                      ) : (
                        <Typography></Typography>
                      )}
                    </div>
                    <Typography
                      onClick={() => window.open(value_.link, "_blank")}
                      className={classes.rowTitle}
                    >
                      {value_.title}
                    </Typography>
                  </div>
                ))}
              </div>
            );
          })}
      </Stack>
    </Paper>
  );
}

const useStyles = makeStyles(() => ({
  root: { color: "black" },
  record: {
    marginLeft: "30px",
    marginRight: "30px",
    padding: "15px",
    textAlign: "center",
  },
  title: {
    fontWeight: "bolder",
    marginBottom: "20px",
  },
  row: { textAlign: "left", marginBottom: "10px" },
  rowDate: {
    color: GREY_COLOR,
  },
  rowHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5px",
    marginBottom: "5px",
  },
  rowCategory: {
    color: BLUE_COLOR,
  },
  rowRequesting: {
    color: GREEN_COLOR,
  },
  rowInit: {
    color: MAIN_COLOR,
  },
  rowTitle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    wordWrap: "break-word",
    textOverflow: "ellipsis",
  },
}));

export default RecordComponent;

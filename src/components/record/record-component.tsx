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

enum EnumStatus {
  INIT = "초기화중",
  REQUESTING = "분류중",
  CLASSIFIED = "",
}

type IItem = {
  title: string;
  category: string;
  createdDate: string;
  link: string;
  status: EnumStatus;
};

const rawItemData: IItem[] = [
  {
    title: "네이버 블로그 주소 어쩌고 저쩌고, 네이버 블로그 주소 어쩌고 저쩌고",
    category: "OS / 알고리즘",
    createdDate: "12월 20일",
    link: "https://brunch.co.kr/",
    status: EnumStatus.CLASSIFIED,
  },
  {
    title: "다음 블로그 주소 어쩌고 저쩌고, 네이버 블로그 주소 어쩌고 저쩌고",
    category: "OS / 자료구조",
    createdDate: "12월 20일",
    link: "https://brunch.co.kr/",
    status: EnumStatus.REQUESTING,
  },
  {
    title:
      "네이트 블로그 주소 어쩌고 저쩌고,, 네이버 블로그 주소 어쩌고 저쩌고",
    category: "OS / 자료구조",
    createdDate: "12월 17일",
    link: "https://brunch.co.kr/",
    status: EnumStatus.INIT,
  },
];

function RecordComponent() {
  const classes = useStyles();
  const [date, setDate] = useState("");

  const getDateData = (itemData: IItem[]) => {
    let dateData = [];
    for (const item of itemData) {
      if (item.createdDate in dateData) {
        continue;
      } else {
        dateData.push(item.createdDate);
      }
    }
    return dateData;
  };

  const dateData = getDateData(rawItemData);

  const valueData = [];
  let currentDate = dateData[0];
  let temp: IItem[] = [];
  for (const item of rawItemData) {
    if (currentDate === item.createdDate) {
      temp.push(item);
    } else {
      valueData.push(temp);
      temp = [item];
      currentDate = item.createdDate;
    }
  }
  valueData.push(temp);

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
        {valueData.map((items, idx) => (
          <div key={idx}>
            <Typography className={classes.rowDate}>
              {dateData.at(idx)}
            </Typography>
            {items.map((item, idx) => (
              <div key={idx} className={classes.row}>
                <div className={classes.rowHead}>
                  <Typography className={classes.rowCategory}>
                    {item.category}
                  </Typography>
                  {item.status === EnumStatus.REQUESTING ? (
                    <Typography className={classes.rowRequesting}>
                      {item.status}
                    </Typography>
                  ) : item.status === EnumStatus.INIT ? (
                    <Typography className={classes.rowInit}>
                      {item.status}
                    </Typography>
                  ) : (
                    <Typography>{item.status}</Typography>
                  )}
                </div>
                <Typography className={classes.rowTitle}>
                  {item.title}
                </Typography>
              </div>
            ))}
          </div>
        ))}
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

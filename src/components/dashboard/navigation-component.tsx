import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';

interface Nprops {
  toggle: boolean;
}

function NavigationComponent(props: Nprops) {
  const classes = useStyles();
  const onClickCategory = () => {};
  const onClickBookmark = () => {};
  if (props.toggle) {
    return (
      <div className={classes.root}>
        <div className={classes.typoBox}>
          <Typography variant='h6' sx={{ paddingBottom: '10px' }}>
            <Box sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
              카테고리 종류
            </Box>
          </Typography>
          <Typography variant='h6' sx={{ paddingBottom: '10px' }}>
            <Box sx={{ fontWeight: 'bold', cursor: 'pointer' }}>MY 북마크</Box>
          </Typography>
        </div>
      </div>
    );
  } else return null;
}

const useStyles = makeStyles({
  root: {
    color: 'black',
    display: 'flex',
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cecece',
    transition: 'max - height 0.3s ease- out',
  },
  typoBox: {
    display: 'flex',
    width: '90%',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
});

export default NavigationComponent;

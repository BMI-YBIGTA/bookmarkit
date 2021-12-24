import React, { useState } from 'react';
import {
  TextField,
  Typography,
  InputAdornment,
  Box,
  Button,
  Paper,
  IconButton,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../stores/reducers/userReducer';
import { LOGOUT_USER } from '../../stores/actions/userAction';
import { useDispatch } from 'react-redux';
import { RootState } from '../../stores/reducers';

interface headerProps {
  authed: boolean;
  toggle: boolean;
  setToggle: Function;
}

function Header({ authed, toggle, setToggle }: headerProps) {
  const classes = useStyles();
  const [userName, setUserName] = useState('User');
  const dispatch = useDispatch();

  const nickname = useSelector(
    (state: RootState) => state.userReducer.nickname
  );

  const userSpace = () => {
    if (authed) {
      return (
        <span>
          <Typography variant='h5'>
            <Box sx={{ fontWeight: 'bold' }}>{nickname}님</Box>
          </Typography>
          <Button
            sx={{ fontSize: '18px' }}
            variant='text'
            color='error'
            onClick={() => window.localStorage.clear()}
          >
            로그아웃
          </Button>
        </span>
      );
    } else {
      return (
        <span>
          <Link to='/signin' className={classes.link}>
            <Button
              sx={{ fontSize: '18px' }}
              variant='contained'
              color='primary'
            >
              로그인
            </Button>
          </Link>
          <Link to='/signup' className={classes.link}>
            <Button
              sx={{ fontSize: '18px' }}
              variant='contained'
              color='secondary'
            >
              회원가입
            </Button>
          </Link>
        </span>
      );
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.firstContainer}>
          <IconButton onClick={() => setToggle((toggle: boolean) => !toggle)}>
            <MenuIcon className={classes.navBar} fontSize='large' />
          </IconButton>
          <div className={classes.logo}>
            <Typography variant='h4'>BookMarkit</Typography>
          </div>
        </div>
        <TextField
          className={classes.secondContainer}
          // className={classes.search}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant='outlined'
        />
        <div className={classes.thirdContainer}>{userSpace()}</div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    direction: 'inherit',
    display: 'flex',
    marginTop: '20px',
    marginBottom: '40px',
  },
  firstContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  secondContainer: {
    flex: 3,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  thirdContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    // alignContent: "center",
    // placeContent: "center",
    color: '#39F',
    justifyContent: 'center',
  },
  search: {},
  userName: {
    // flexDirection: "column",
  },
  navBar: {},
  link: {
    textDecoration: 'none',
    '&:visited': { textDecoration: 'none' },
    '&:hover': { textDecoration: 'none' },
    '&:link': { textDecoration: 'none' },
  },
});

export default Header;

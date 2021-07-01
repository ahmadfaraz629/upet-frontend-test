import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  header: {
    height: '78px',
    margin: 0
  },
  headerContainer: {
    margin: 0,
    position: 'relative',
    top: '25%',
    '-ms-transform': 'translateY(-50%)',
    transform: 'translateY(-50%)'
  },
  headerIcon: {
    cursor: 'pointer',
    height: '30px'
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Icon component='span' className={classes.headerContainer}>
        <img src='/svgs/upet_logo.svg' alt='icon' className={classes.headerIcon} />
      </Icon>
    </Box>
  );
}

export default Header;

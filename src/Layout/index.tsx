import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from 'components/Common/Header';
import { COLORS } from 'utils/constant';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Rawline'].join(',')
  },
  palette: {
    primary: {
      main: COLORS.GREEN
    },
    action: {
      disabledBackground: COLORS.GREEN,
      disabledOpacity: 0.6
    }
  }
});

const useStyles = makeStyles(() => ({
  root: (props: { isWrap: boolean }) => ({
    '& .MuiGrid-container': {
      flexWrap: props.isWrap ? 'wrap' : 'nowrap'
    },
    '& .MuiButton-contained.Mui-disabled': {
      opacity: 0.6
    }
  })
}));

function Layout({ children, isWrap }) {
  const classes = useStyles({ isWrap: isWrap });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm' className={classes.root}>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  );
}

export default Layout;

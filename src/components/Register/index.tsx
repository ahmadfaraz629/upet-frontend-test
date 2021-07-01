import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Form from 'components/Register/Form';
import ReceivedApplication from 'components/Register/ReceivedApplication';

import Header from 'components/Common/Header';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Rawline'].join(',')
  },
  palette: {
    primary: {
      main: '#02E0B1'
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: (props: { isFormData: boolean }) => ({
    '& .MuiGrid-container': {
      flexWrap: props.isFormData ? 'nowrap' : 'wrap'
    }
  })
}));

function Register() {
  const [formData, setFormData] = React.useState(null);
  const classes = useStyles({ isFormData: !!formData });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth='sm' className={classes.root}>
          <Header />
          {formData ? <ReceivedApplication formData={formData} /> : <Form setFormData={setFormData} />}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Register;

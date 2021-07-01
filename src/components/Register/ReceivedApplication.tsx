import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  notificationIcon: {
    width: '71px',
    height: '53.99px'
  },
  notificationText: {
    fontSize: '22px',
    lineHeight: '29px',
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: 'normal'
  },
  notificationParagraph: {
    fontSize: '15px',
    lineHeight: '21px',
    color: 'rgba(0, 0, 0, 0.54)',
    fontStyle: 'normal',
    fontWeight: 'normal'
  }
}));

function ReceivedApplication({ formData }) {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <Icon component='span'>
            <img src={`/svgs/notification.svg`} alt='icon' className={classes.notificationIcon} />
          </Icon>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='inherit' component='span' className={classes.notificationText}>
                Thanks, {formData.firstName}!{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='inherit' component='span' className={classes.notificationText}>
                We’ve received your application
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box paddingTop='27px'>
        <Typography variant='inherit' component='span' className={classes.notificationParagraph}>
          We’ll process your application as soon as possible and send you a decision within 30 days to {formData.phoneNumber} or{' '}
          {formData.email}. We will contact you in case more information is needed.
        </Typography>
      </Box>

      <Box paddingTop='21px'>
        <Typography variant='inherit' component='span' className={classes.notificationParagraph}>
          While we’re reviewing your application, please don’t submit another application for the uPet’s breeder program.
        </Typography>
      </Box>
    </>
  );
}

export default ReceivedApplication;

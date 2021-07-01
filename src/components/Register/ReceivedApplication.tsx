import React, { FC, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Layout from 'Layout';
import { FormValues } from 'routes/types';
import { receivedApplicationStyle } from 'components/Register/style';
import { ImageBaseUrl } from 'utils/constant';
import history from 'utils/history';
interface IReceivedApplicationProps {
  formData: FormValues;
}

const ReceivedApplication: FC<IReceivedApplicationProps> = ({ formData }) => {
  const classes = receivedApplicationStyle();

  useEffect(() => {
    if (!formData) history.push('/register');
  }, [formData]);

  return (
    <Layout isWrap={false}>
      <Grid container spacing={3}>
        <Grid item>
          <Icon component='span'>
            <img src={`${ImageBaseUrl}/notification.svg`} alt='icon' className={classes.notificationIcon} />
          </Icon>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='inherit' component='span' className={classes.notificationText}>
                Thanks, {formData?.firstName}!{' '}
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
          We’ll process your application as soon as possible and send you a decision within 30 days to {formData?.phoneNumber} or{' '}
          {formData?.email}. We will contact you in case more information is needed.
        </Typography>
      </Box>

      <Box paddingTop='21px'>
        <Typography variant='inherit' component='span' className={classes.notificationParagraph}>
          While we’re reviewing your application, please don’t submit another application for the uPet’s breeder program.
        </Typography>
      </Box>
    </Layout>
  );
};

export default ReceivedApplication;

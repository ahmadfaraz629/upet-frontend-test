import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from 'utils/constant';

export const countrySelectDialogStyle = makeStyles(() => ({
  dialogHeader: {
    padding: '16px 24px 0px 24px',
    '& .MuiDialogTitle-root': {},
    '& .MuiTypography-root': {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: '22px',
      color: 'rgba(0, 0, 0, 0.87)'
    }
  },
  dialogList: {
    '& .MuiButtonBase-root': {
      paddingTop: '0px',
      paddingBottom: '0px'
    },
    '& .MuiListItemAvatar-root': {
      minWidth: '55px'
    },
    '& .MuiAvatar-colorDefault': {
      backgroundColor: 'inherit'
    },
    '& .MuiListItem-gutters': {
      paddingLeft: '24px',
      paddingRight: '26px'
    },
    '& img': {
      width: '24px',
      height: '16px'
    }
  }
}));

export const formStyle = makeStyles(theme => ({
  halfWidth: {
    width: '50%'
  },
  fullwidth: {
    width: '100%'
  },
  button: {
    width: '100%',
    height: '60px',
    '& .MuiButton-label': {
      color: '#FFFFFF',
      opacity: 0.9,
      fontWeight: 500,
      fontSize: '14px'
    },

    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',
    borderRadius: '2px'
  },
  icon: {
    cursor: 'pointer',
    padding: '21px 0px 0px 20px',
    width: '24px',
    height: '16px'
  },
  header: {
    width: '414px',
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
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  }
}));

export const phoneNumberStyle = makeStyles(() => ({
  iconTextField: (props: any) => ({
    border: `1px solid ${props.error ? COLORS.RED : COLORS.GREY}`,

    '& .MuiFilledInput-root': {
      height: '58px',
      backgroundColor: 'inherit',
      border: 'none',
      boxSizing: 'border-box',
      borderRadius: '2px'
    },
    '& .MuiFilledInput-underline:after, .MuiFilledInput-underline:before': {
      borderBottom: 'none'
    },
    '& .MuiFormHelperText-contained': {
      marginLeft: '0px'
    }
  }),
  icon: {
    cursor: 'pointer',
    padding: '21px 0px 0px 20px',
    width: '24px',
    height: '16px'
  }
}));

export const receivedApplicationStyle = makeStyles(() => ({
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

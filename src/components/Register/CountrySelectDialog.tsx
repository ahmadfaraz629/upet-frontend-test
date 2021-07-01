import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import { COUNTRIES } from 'utils/constant';

const useStyles = makeStyles(() => ({
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

function CountrySelectDialog(props) {
  const classes = useStyles({});
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open}>
      <DialogTitle className={classes.dialogHeader} id='simple-dialog-title'>
        Select country
      </DialogTitle>
      <List className={classes.dialogList}>
        {COUNTRIES.map(country => (
          <ListItem button onClick={() => handleListItemClick(country.name)} key={country.name}>
            <ListItemAvatar>
              <Avatar>
                <img src={`/${country.name}_flag.svg`} alt='icon' />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={country.label} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default CountrySelectDialog;

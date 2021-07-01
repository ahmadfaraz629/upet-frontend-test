import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import { COUNTRIES, ImageBaseUrl } from 'utils/constant';
import { countrySelectDialogStyle } from './style';

function CountrySelectDialog(props) {
  const classes = countrySelectDialogStyle({});
  const { onClose, country, open } = props;

  const handleClose = () => {
    onClose(country);
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
                <img src={`${ImageBaseUrl}/${country.name}_flag.svg`} alt='icon' />
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

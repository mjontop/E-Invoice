/* eslint-disable */
import React from 'react';

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';

import Item from './Item';
import NavTab from './NavTab';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'green'
  },
  gap: {
    marginTop: theme.spacing(2)
  },
  gapSmall: {
    marginTop: theme.spacing(1)
  },
  space: {
    marginRight: theme.spacing(1)
  },
  spaceLarge: {
    marginRight: theme.spacing(4)
  },
  test: {
    backgroundColor: 'yellow'
  },
  bar: {
    flexGrow: 1
  }
}));

const Import = (props) => {
  const classes = useStyles();
  let info = [
    {
      title: 'Government Excel',
      summary: 'Import data prepared and saved on government excel format',
      color: '#90EE90',
      icon: 'ImportContactsIcon'
    },
    {
      title: 'Custom Excel Template',
      summary: 'Import data prepared on your own Excel template',
      color: '#f6a46d',
      icon: 'ImportContactsIcon'
    },
    {
      title: 'Tally',
      summary: 'Import your data prepared and saved in Tally on your system',
      color: '#3f97cc',
      icon: 'ImportContactsIcon'
    },
    {
      title: 'Cleartax Template',
      summary: 'Import data prepared and saved on a Cleartax template',
      color: '#f56674',
      icon: 'ImportContactsIcon'
    }
  ];
  return (
    <Container>
      <div className={classes.gapSmall}>
        <div>
          <Typography variant="h4">Import Excel</Typography>{' '}
        </div>

        <div className={classes.bar}>
          <AppBar position="static" color="white" className={classes.gapSmall}>
            <Toolbar>
              <IconButton>
                {' '}
                <AccountBoxIcon />
              </IconButton>

              <Typography variant="h5" className={classes.spaceLarge}>
                Pan:
              </Typography>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                className={classes.spaceLarge}
              >
                <Typography className={classes.space} variant="h5">
                  | Cleartax{' '}
                </Typography>
                <Typography variant="h5">| GSTIN: 27AA</Typography>
              </div>
              <div>
                <Typography variant="h5">| Maharasta</Typography>
              </div>
              <IconButton style={{ marginLeft: 'auto' }}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.gap}>
          <Typography variant="body1">
            CHOOSE A METHOD TO IMPORT YOUR DATA
          </Typography>
        </div>
        <div
          className={classes.gap}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {info.map((d) => (
            <Item data={d} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Import;

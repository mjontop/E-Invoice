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

import Item from 'src/components/E-Invoicing/Item';
import NavTab from 'src/components/E-Invoicing/NavTab';
// import Nav from 'src/components/Nav';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';

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
  test: {
    backgroundColor: 'yellow'
  }
}));

const Index = (props) => {
  const classes = useStyles();
  let info = [
    {
      title: 'Generate E-Invoices',
      summary: 'Upload your sales documents to genreate IRN and QR code',
      color: '#90EE90',
      icon: 'AddCircleRoundedIcon'
    },
    {
      title: 'View all E-Invoices',
      summary: 'View all Uploaded documents and take action on them',
      color: '#f6a46d',
      icon: 'VisibilityIcon'
    },
    {
      title: 'Data Import History',
      summary:
        'View all your previously imported sales document and review to fix errors',
      color: '#3f97cc',
      icon: 'HistoryIcon'
    },
    {
      title: 'Purchase Invoices',
      summary: 'View E-Invoices generated against you by vendors',
      color: '#f56674',
      icon: 'ShopIcon'
    }
  ];
  return (
    <>
      <Container>
        <div>
          {/* <Nav /> */}
          <div>
            <Typography variant="h3">Welcome To Our E-Invoicing!</Typography>{' '}
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', color: '#3f97cc' }}
            className={classes.gapSmall}
          >
            {' '}
            <FolderIcon
              className={classes.space}
              style={{ color: '#3f97cc', cursor: 'pointer' }}
            />{' '}
            <Typography variant="body1">Add Business/GSTIN</Typography>
          </div>
          <div className={classes.gap}>
            <Typography variant="body1">Recommendations</Typography>
          </div>
          <div
            className={classes.gap}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            {info.map((d) => (
              <Item data={d} />
            ))}
          </div>
          <div className={classes.gap}>
            <NavTab />
          </div>
        </div>
      </Container>
    </>
  );
};
console.log('dfasf', typeof Index);
export { Index };

import React from 'react';

import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@material-ui/core';

import Item from './Item';
import NavTab from './NavTab';
import Business from './Business';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'green',
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch'
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    }
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

const Addbusiness = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const info = [
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
          <div className="container my-3">
            <h3>Welcome to Tax invoicing</h3>
            <Button variant="contained" color="secondary" onClick={handleOpen}>
              Add Business/GST
            </Button>
            <div className="row">
              <div className="offset-8 col-4">
                <Link to="/app/invite-users" className="ml-4">
                  <Button variant="contained" color="primary">
                    <span className="px-1">Settings</span>
                  </Button>
                </Link>
                <Business />
              </div>
            </div>

            <Dialog
              fullWidth
              maxWidth="md"
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <h2 id="transition-modal-title">Add Business</h2>
              </DialogTitle>
              <DialogContent dividers>
                <div id="transition-modal-description">
                  <Grid container spacing={3}>
                    <Grid item xs={6} spacing={6}>
                      <Grid item xs={6}>
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="filled-basic"
                            label="GSTIN"
                            variant="filled"
                          />
                          <TextField
                            id="filled-basic"
                            label="NIC API Username"
                            variant="filled"
                          />
                        </form>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} spacing={6}>
                      <Grid item xs={6}>
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="filled-basic"
                            label="Display Name"
                            variant="filled"
                          />
                          <TextField
                            id="filled-basic"
                            label="NIC API Password"
                            variant="filled"
                          />
                        </form>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={handleClose}
                  variant="contained"
                  color="secondary"
                >
                  Add Business
                </Button>
              </DialogActions>
            </Dialog>
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
export default Addbusiness;

import React from 'react';
import {
  Container,
  Button,
  Dialog,
  makeStyles,
  DialogTitle,
  Grid,
  DialogContent,
  DialogActions,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch'
    }
  }
}));

const Addbusiness = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="sm">
        <h3>Welcome to Tax invoicing</h3>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Add Business/GST
        </Button>

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
            <Button autoFocus onClick={handleClose} color="primary">
              Add Business
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default Addbusiness;

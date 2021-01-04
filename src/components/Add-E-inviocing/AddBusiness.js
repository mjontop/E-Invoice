import React from 'react';
import {
  Container,
  Button,
  Modal,
  Backdrop,
  Fade,
  makeStyles,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
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

  return (
    <>
      <Container maxWidth="sm">
        <h3>Welcome to ClearTax invoicing</h3>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Add Business/GST
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Add Business</h2>
              <div id="transition-modal-description">
                <Grid container spacing={6}>
                  <Grid item xs={6} spacing={6}>
                    <div>GSTIN</div>
                    <input type="text" value="" />
                    <div>NIC API Username </div>
                    <input type="text" value="" />
                  </Grid>
                  <Grid item xs={6} spacing={6}>
                    <div>Display Name</div>
                    <input type="text" value="" />
                    <div>NIC API Password </div>
                    <input type="text" value="" />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Fade>
        </Modal>
      </Container>
    </>
  );
};

export default Addbusiness;

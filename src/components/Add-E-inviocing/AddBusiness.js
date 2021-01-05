import React from 'react';
import {
  // Container,
  Button,
  Dialog,
  makeStyles,
  DialogTitle,
  Grid,
  DialogContent,
  DialogActions,
  TextField,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  SvgIcon
} from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
// import GridOnIcon from '@material-ui/icons/GridOn';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ReportIcon from '@material-ui/icons/Report';
import Business from '../Business/Business';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch'
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
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
      <div className="container my-3">
        <h3>Welcome to Tax invoicing</h3>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Add Business/GST
        </Button>
        <div className="row">
          <div className="offset-8 col-4">
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
            <Button autoFocus onClick={handleClose} color="primary">
              Add Business
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="row m-2">
        <Card className={`${classes.root} col-md-3 col-12`}>
          <CardActionArea>
            <CardMedia>
              <SvgIcon component={AddRoundedIcon} />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Generate E-invoices
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={`${classes.root} col-md-3 col-12`}>
          <CardActionArea>
            <CardMedia>
              <SvgIcon component={VisibilityRoundedIcon} />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                View all E-invoices
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={`${classes.root} col-md-3 col-12`}>
          <CardActionArea>
            <CardMedia>
              <SvgIcon component={HistoryRoundedIcon} />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Data Import history
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={`${classes.root} col-md-3 col-12`}>
          <CardActionArea>
            <CardMedia>
              <SvgIcon component={ShoppingCartRoundedIcon} />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Purchased Invoices
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <hr />
        <Card className={`${classes.root} col-md-3 col-12`}>
          <CardActionArea>
            <CardMedia>
              <SvgIcon component={FormatListBulletedIcon} />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                BranchWise invoice Summary
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={`${classes.root} col-md-3 col-12`}>
          <CardActionArea>
            <CardMedia>
              <SvgIcon component={ReportIcon} />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Oprational Dashboard
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={`${classes.root} col-md-3 col-12`}>
          <CardActionArea>
            <CardMedia>
              <SvgIcon component={ReportIcon} />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Comparision Report
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default Addbusiness;

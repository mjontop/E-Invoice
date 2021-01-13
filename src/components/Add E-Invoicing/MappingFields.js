/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Box, Container, Grid, Link, TextField } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PublishIcon from '@material-ui/icons/Publish';
import MapIcon from '@material-ui/icons/Map';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ETable from 'src/components/custom/E-Invoicing/ETable';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  rad: {
    borderStartEndRadius: '14px',
    borderEndStartRadius: '14px',
    borderEndEndRadius: '14px',
    borderStartStartRadius: '14px'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
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
  rightDesign: { display: 'flex', alignItems: 'center' }
}));

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <ImportContactsIcon
        onClick={handleClickOpen}
        style={{ fontSize: '90px', color: props.data.color }}
      /> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Container className={classes.gapSmall}>
          <AppBar color="white" className={classes.appBar}>
            <Toolbar>
              <IconButton>
                {' '}
                <AccountBoxIcon style={{ color: '#4d63d0' }} />
              </IconButton>

              <Typography variant="h5" className={classes.spaceLarge}>
                Pan:
              </Typography>
              <IconButton onClick={handleClose} style={{ marginLeft: 'auto' }}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className={classes.gap}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h4">Map the fields</Typography>
              <Button
                style={{
                  marginLeft: 'auto',
                  backgroundColor: '#4d63d0',
                  color: 'white'
                }}
              >
                {' '}
                Save template
              </Button>
            </div>
            <div
              className={classes.gap}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Typography className={classes.space}>
                Total columns mapped: 5/132
              </Typography>
              <Typography
                className={classes.space}
                style={{ fontSize: '30px' }}
              >
                |
              </Typography>
              <Typography className={classes.space}>Show</Typography>
              <Button
                style={{
                  color: 'white',
                  backgroundColor: '#7d2ae8'
                }}
                className={`${classes.rad} ${classes.space}`}
              >
                ALL
              </Button>
              <Button
                style={{
                  border: 'grey solid 0.5px'
                }}
                className={`${classes.rad} ${classes.space}`}
              >
                Mapped Fields
              </Button>
              <Button
                style={{
                  border: 'grey solid 0.5px'
                }}
                className={`${classes.rad} ${classes.space}`}
              >
                UnMapped Fields
              </Button>
              <Button
                style={{
                  border: 'grey solid 0.5px',
                  marginLeft: 'auto'
                }}
              >
                Clear all mapping
              </Button>
            </div>
            <div className={classes.gap}>
              <ETable />
            </div>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}

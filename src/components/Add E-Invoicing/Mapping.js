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
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
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
          <div
            id="innerContainer"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div id="left" className={`${classes.space} ${classes.gap}`}>
              <div>
                <Typography variant="h4">
                  Upload a file from your computer
                </Typography>
                <Typography>to start mapping</Typography>
              </div>
              <Button
                className={classes.gap}
                style={{
                  backgroundColor: '#4d63d0',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <CloudUploadIcon className={classes.space} />{' '}
                <span>Select file from your computer</span>
              </Button>
              <Divider className={classes.gap} />
              <div className={classes.gap}>
                <Typography variant="h4">
                  Select a file containing the invoice details xlsx/csv/xls/xlsm
                  files supported
                </Typography>
                <Typography className={classes.gap}>
                  <ul>
                    <li>
                      Make sure the sheet you want to map is the first sheet in
                      the Excel file
                    </li>
                    <li>
                      Ensure the headers are present in the first row of the
                      sheet
                    </li>
                    <li>
                      Please ensure merged cellls are not present in the Excel
                      file
                    </li>
                  </ul>
                </Typography>
              </div>
            </div>
            <div id="right" className={classes.gap}>
              <div className={classes.rightDesign}>
                <PublishIcon style={{ fontSize: '100px' , color:"#f2d43d"}} />{' '}
                <span>Upload a file containing invoice details</span>
              </div>
              <div className={classes.rightDesign}>
                <MapIcon style={{ fontSize: '100px', color:"#5aa57d" }} />
                <span>
                  Match the colums in ClearTax templates to corresponding
                  columns in your file
                </span>
              </div>
              <div className={classes.rightDesign}>
                <SaveAltIcon style={{ fontSize: '100px', color:"#3a5fcd" }} />
                <span>
                  Save your matched fields as a template and use them to repeat
                  invoice imports to a GSTIN
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}

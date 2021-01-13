/* eslint-disable */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import BusinessIcon from '@material-ui/icons/Business';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

function getModalStyle() {
  const top = 0.5;
  const right = 0;

  return {
    top: `${top}%`,
    right: `${right}%`,
    transform: `translate(-${top}%, -${right}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: "99vh",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  gap: {
    marginTop: theme.spacing(2)
  },
  gapSmall: {
    marginTop: theme.spacing(1)
  },
  space: {
    marginRight: theme.spacing(1)
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {' '}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <BusinessIcon style={{ marginRight: '10px' , color:"#d6b2c8"}} />

        <Typography variant="button" style={{ cursor: 'pointer' }}>
          {' '}
          Select Business
        </Typography>

        <IconButton style={{ marginLeft: 'auto' }}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={classes.gap}>
        <TextField
          id="filled-search"
          label="Search Business/GSTN"
          type="search"
          variant="filled"
        />
        <Typography className={classes.gapSmall}>
          All Business (2 OST)
        </Typography>
        <Divider />
        <Typography className={classes.gapSmall} variant="h4">
          Cleartax{' '}
        </Typography>
        <Divider className={classes.gapSmall} />
        <div
          className={classes.gapdSmall}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography>Maharasta</Typography> <Typography>27AA1</Typography>{' '}
        </div>{' '}
        <Divider />
        <div
          className={classes.gapdSmall}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography>Kamataka</Typography> <Typography>27AA1</Typography>{' '}
        </div>{' '}
        <Divider />
      </div>
    </div>
  );

  return (
    <div>
      <AddCircleRoundedIcon
        onClick={handleOpen}
        style={{ fontSize: '90px', color: props.data.color }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

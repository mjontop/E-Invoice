import React from 'react';
import {
  Button,
  SvgIcon,
  Tab,
  Tabs,
  AppBar,
  makeStyles,
  Typography,
  Box,
  Grid,
  TextField,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions
} from '@material-ui/core';
import PropTypes from 'prop-types';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const getTable = (users) => {
  const allTRs = users.map((user) => (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.assinedRole}</td>
    </tr>
  ));
  return (
    <table className="table">
      <thead className="text-white bg-secondary">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Assined Role </th>
          <th scope="col">Edit Detailes</th>
        </tr>
      </thead>
      <tbody>{allTRs}</tbody>
    </table>
  );
};

const TabPanel = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const a11yProps = (index) => {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
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
  },
  dialog: {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: 0,
    bottom: 0
  }
}));

const TabsWrappedLabel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');
  const [open, setOpen] = React.useState(false);
  const [allUsers, setAllUsers] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    assinedRole: ''
  });
  const handleOpen = () => {
    setOpen(true);
    setFormData({ name: '', email: '', assinedRole: '' });
  };

  const handleClose = () => {
    setOpen(false);
    setAllUsers([...allUsers, formData]);
  };
  const handleChange = (event, newValue) => {
    if (Object.values(newValue).reduce((a, b) => a + b, 0)) setValue(newValue);
  };

  const handleChangeForm = (name) => (event) => {
    if (event.target.value !== '') {
      setFormData({ ...formData, [name]: event.target.value });
    }
  };

  return (
    <div className={classes.rootOld}>
      <AppBar position="static">
        <Tabs
          TabIndicatorProps={{ style: { background: 'white' } }}
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="List of Members"
            {...a11yProps('one')}
            className="mx-4"
          />
          <Tab
            value="two"
            label="Rules"
            {...a11yProps('two')}
            className="mx-4"
          />
        </Tabs>
      </AppBar>
      <div style={{ float: 'right' }} className="m-2">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          <SvgIcon component={AddRoundedIcon} />
          <span className="px-1">Invite New users</span>
        </Button>
      </div>
      <div>
        <Dialog
          fullHeight
          maxWidth="sm"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          classes={{
            paper: classes.dialog
          }}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <h2 id="transition-modal-title">Invite New Members</h2>
          </DialogTitle>
          <DialogContent dividers>
            <div id="transition-modal-description">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    onChange={handleChangeForm('name')}
                    className="w-100 my-2"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                    onChange={handleChangeForm('email')}
                    className="w-100 my-2"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="filled-basic"
                    label="Assined Role"
                    variant="filled"
                    onChange={handleChangeForm('assinedRole')}
                    className="w-100 my-2"
                  />
                </Grid>
              </Grid>
            </div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Add Member
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <br />
      <TabPanel value={value} index="one">
        {getTable(allUsers)}
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
    </div>
  );
};

const InviteUsers = () => {
  return (
    <>
      <h2 className="my-4 mx-2">User Access</h2>

      <div className="mt-4">
        <TabsWrappedLabel />
      </div>
    </>
  );
};

export default InviteUsers;

import React, { useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { makeStyles, TextField, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 4, 2)
  }
}));

const getBusinessList = (businesses) => {
  return businesses.map((business) => (
    <li className="list-group-item">{`${business.displayName} | ${business.GSTIN}`}</li>
  ));
};

const BusinessSettings = () => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [businesses, setBusinesses] = useState([
    {
      displayName: 'Mumbai',
      GSTIN: 456
    },
    {
      displayName: 'Delhi',
      GSTIN: 458
    }
  ]);

  return (
    <div className={classes.root}>
      <div>
        <div>
          <Typography variant="h2" className={classes.title}>
            Switch Business
          </Typography>

          <div className="row m-2">
            <div className="col">
              <TextField
                id="filled-basic"
                label="Search Business"
                variant="filled"
                className="w-100"
              />
            </div>
            <div>
              <ul className="list-group mt-2">
                <li className="list-group-item bg-dark text-white">
                  Business Name | GSTIN
                </li>
                {getBusinessList(businesses)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSettings;

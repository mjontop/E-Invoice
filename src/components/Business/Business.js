import React from 'react';
// eslint-disable-next-line object-curly-newline
import {
  makeStyles,
  TextField,
  Grid,
  Typography,
  Button
} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 4, 2)
  }
}));

const BusinessSettings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" className={classes.title}>
            Business Settings
          </Typography>

          <form>
            <div className="row m-2">
              <div className="col">
                <TextField
                  id="filled-basic"
                  label="Entity name"
                  variant="filled"
                  className="w-100"
                />
              </div>
              <div className="col">
                <TextField
                  id="filled-basic"
                  label="GST Number"
                  variant="filled"
                  className="w-100"
                />
              </div>
              <div className="col">
                <Button className="w-100 h-100" variant="contained">
                  Add Business
                </Button>
              </div>
            </div>
          </form>
        </Grid>
      </div>
    </div>
  );
};

export default BusinessSettings;

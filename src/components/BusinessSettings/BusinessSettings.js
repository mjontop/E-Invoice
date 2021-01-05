import React from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 2, 2)
  }
}));

const generate = (element) => {
  return [0, 1, 2].map(
    (value) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      React.cloneElement(element, {
        key: value
      })
    // eslint-disable-next-line function-paren-newline
  );
};

const Business = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" className={classes.title}>
            All Business
          </Typography>
          <div className={classes.demo}>
            <List>
              {generate(
                <ListItem dense>
                  <ListItemText primary="Single-line item" />
                </ListItem>
              )}
            </List>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Business;

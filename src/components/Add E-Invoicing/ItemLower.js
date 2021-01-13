/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles({
  root: {
    maxWidth: '18%',
    textAlign: 'center',
    marginRight: '15px'
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {props.data.icon === 'AssessmentIcon' ? (
          <AssessmentIcon
            style={{ fontSize: '80px', color: props.data.color }}
          />
        ) : props.data.icon === 'DashboardIcon' ? (
          <DashboardIcon
            style={{ fontSize: '80px', color: props.data.color }}
          />
        ) : props.data.icon === 'ReceiptIcon' ? (
          <ReceiptIcon style={{ fontSize: '80px', color: props.data.color }} />
        ) : (
          ''
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

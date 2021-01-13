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
import VisibilityIcon from '@material-ui/icons/Visibility';
import HistoryIcon from '@material-ui/icons/History';
import ShopIcon from '@material-ui/icons/Shop';
import Generate from './Generate';
import CET from './CET';

const useStyles = makeStyles({
  root: {
    maxWidth: '24%',
    textAlign: 'center'
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          {props.data.icon === 'AddCircleRoundedIcon' ? (
            <Generate data={props.data} />
          ) : props.data.icon === 'VisibilityIcon' ? (
            <VisibilityIcon
              style={{ fontSize: '90px', color: props.data.color }}
            />
          ) : props.data.icon === 'HistoryIcon' ? (
            <HistoryIcon
              style={{ fontSize: '90px', color: props.data.color }}
            />
          ) : props.data.icon === 'ShopIcon' ? (
            <ShopIcon style={{ fontSize: '90px', color: props.data.color }} />
          ) : props.data.icon === 'ImportContactsIcon' ? (
            <CET data={props.data} />
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
        {}
      </Card>
    </>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CardMedia, CardContent, Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    WebkitBoxShadow:"10px 10px 20px 0px rgba(0,0,0,0.3)",
    MozBoxShadow:"10px 10px 20px 0px rgba(0,0,0,0.3)",
    boxShadow:"10px 10px 20px 0px rgba(0,0,0,0.3)"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    margin: '70px 105px',
  },
  contentName: {
    fontFamily: 'Vollkorn',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '89px',
    color: '#83BB61',
  },
  contentInfo: {
    fontFamily: 'Vollkorn',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '50px',
  },
  cover: {
    width: 383,
    height: 'auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const {src} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={src}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        {props.children}
      </div>
    </Card>
  );
}

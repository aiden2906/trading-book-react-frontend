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

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="/static/images/Rectangle-30.png"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.contentName}>
            Socilla
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.contentInfo}>
            0123456789
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.contentInfo}>
            abc@gmail.com
          </Typography>
          <Button
            style={{
              backgroundColor: '#83BB61',
              width: '300px',
              height: '100px',
              marginTop: '116px',
              borderRadius: '50px',
              fontSize: '30px',
              color: 'white'
            }}
          >
            Chat
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}

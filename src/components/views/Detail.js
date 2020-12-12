import React, { useEffect, useState } from 'react';
import MediaControlCard from '../elements/MediaControlCard';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const axios = require('axios').default;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    WebkitBoxShadow: '10px 10px 20px 0px rgba(0,0,0,0.3)',
    MozBoxShadow: '10px 10px 20px 0px rgba(0,0,0,0.3)',
    boxShadow: '10px 10px 20px 0px rgba(0,0,0,0.3)',
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

const style = {
  image: {
    width: '100%',
    height: 600,
  },
  detailImage: {
    width: '535px',
    height: '796px',
    objectFit: 'cover',
  },
  container: {
    width: '80%',
    margin: 'auto',
  },
  title: {
    fontSize: '64px',
    fontWeight: 'bold',
    lineHeight: '89px',
    marginTop: '100px',
  },
  content: {
    fontSize: '35px',
    color: '#797979',
    lineHeight: '57px',
  },
  owner: {
    width: '100%',
    height: 'auto',
  },
  createdAt: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '56px',
    color: '#C4C4C4',
  },
  bigTitle: {
    color: '#83BB61',
    fontSize: '64px',
    fontWeight: 500,
    lineHeight: '89px',
  },
};

const Detail = (props) => {
  const { id } = useParams();
  const [state, setState] = useState({});
  const { name, content, username, address, phone, image } = state;
  const classes = useStyles();

  useEffect(() => {
    axios.get(`http://localhost:8080/demo/api/books/${id}`).then((res) => {
      setState(res.data);
    });
  }, []);

  console.log('--- Redirect to: ', id);
  return (
    <div>
      <div>
        <img style={style.image} src="/static/images/Panner.png" alt="error" />
      </div>
      <div style={style.container}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-400px' }}>
            <img style={style.detailImage} src={image} alt="error" />
          </div>
          <div style={{ position: 'absolute', top: '40px', right: '0px', width: '62%' }}>
            <div style={style.createdAt}>2 days ago</div>
            <div style={style.bigTitle}>{name}</div>
          </div>
        </div>
        <div style={{ height: '300px' }}></div>
        <div style={style.title}>Description</div>
        <div style={style.content}>{content}</div>
        <div style={style.title}>Owner</div>
        <div style={style.owner}>
          <MediaControlCard src="/static/images/Rectangle-30.png">
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5" className={classes.contentName}>
                {username}
                {/* username, address, phone */}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" className={classes.contentInfo}>
                {phone}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" className={classes.contentInfo}>
                {address}
              </Typography>
              <Button
                style={{
                  backgroundColor: '#83BB61',
                  width: '300px',
                  height: '100px',
                  marginTop: '116px',
                  borderRadius: '50px',
                  fontSize: '30px',
                  color: 'white',
                }}
              >
                <Link
                  to={`/profile/${username}`}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  View profile
                </Link>
              </Button>
            </CardContent>
          </MediaControlCard>
        </div>
      </div>
    </div>
  );
};

export default Detail;

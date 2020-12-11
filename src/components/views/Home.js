import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '../elements/Card';
import products from '../../mocks/products.json';

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: '#83BB61',
    color: 'white !important'
  },
}));

const style = {
  panner: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 600,
  },
  thumbnail: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 250,
    margin: 'auto',
    height: '70%',
  },
  title: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 700,
    margin: 'auto',
    height: 400,
  },
  titleFirst: {
    fontWeight: 'bold',
    fontSize: '144px',
    lineHeight: '150px',
    color: 'white',
  },
  titleSecond: {
    fontWeight: 'bold',
    fontSize: '96px',
    lineHeight: '90px',
  },
  container: {
    width: '80%',
    margin: 'auto',
  },
  cate: {
    fontWeight: 500,
    fontSize: '36px',
    lineHeight: '50px',
    textAlign: 'center',
    color: '#797979',
    padding: '20px 0',
  },
};

const Home = () => {
  const [state, setState] = useState('General');
  const classes = useStyles();
  const categories = ['General', 'Comic', 'Poem', 'Hardcover', 'Novel', 'Textbook'];

  const changeCategories = (cat) => {
    setState(cat);
  };

  return (
    <div>
      <div style={style.panner}>
        <img style={style.image} src="/static/images/Home.png" alt="error" />
        <img style={style.thumbnail} src="/static/images/Thumbnail.png" alt="error" />
        <div style={style.title}>
          <div style={style.titleFirst}>Book</div>
          <div style={style.titleSecond}>Exchange</div>
          <Button
            style={{
              backgroundColor: '#83BB61',
              width: 286,
              height: 80,
              marginTop: '90px',
              borderRadius: '50px',
              fontSize: '24px',
              color: 'white',
            }}
          >
            Visit your page
          </Button>
        </div>
      </div>
      {/* Categories */}
      <div style={style.container}>
        <div>
          <Grid container spacing={3}>
            {categories.map((cat, index) => {
              return (
                <Grid item xs={2}>
                  <div
                    className={cat === state ? classes.active : null}
                    style={style.cate}
                    index={index}
                    onClick={() => changeCategories(cat)}
                  >
                    {cat}
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>

        <div style={{marginTop: '90px'}}>
          <Grid container spacing={3}>
            {products.filter(p => state === 'General' || p.type === state).map((p) => {
              return (
                <Grid item xs={3}>
                  <Card {...p}></Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;

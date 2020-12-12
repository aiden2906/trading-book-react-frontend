import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import MediaControlCard from '../elements/MediaControlCard';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
const axios = require('axios').default;

const style = {
  image: {
    width: '100%',
    height: 600,
  },
  detailImage: {
    width: '316px',
    height: '367px',
  },
  container: {
    width: '80%',
    margin: 'auto',
  },
  titlePanner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    right: 600,
    height: 450,
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
    lineHeight: '100px',
  },
  description: {
    width: 700,
    position: 'absolute',
    bottom: 200,
    margin: 'auto',
    right: 350,
    height: 20,
    fontSize: '24px',
  },
  cardDescription: {
    padding: 60,
    position: 'relative',
    height: 350,
  },
  cardDescriptionButton: {
    backgroundColor: '#83BB61',
    width: '175px',
    height: '60px',
    borderRadius: '50px',
    fontSize: '24px',
    color: 'white',
    position: 'absolute',
    bottom: 60,
  },
  cardTitle: {
    fontWeight: 500,
    fontSize: '48px',
    lineHeight: '67px',
    color: '#83BB61',
  },
  cardContent: {
    marginTop: 30,
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '33px',
    width: 800,
  },
  form: {
    padding: 80,
    WebkitBoxShadow: '10px 10px 21px 10px rgba(0,0,0,0.21)',
    MozBoxShadow: '10px 10px 21px 10px rgba(0,0,0,0.21)',
    boxShadow: '10px 10px 21px 10px rgba(0,0,0,0.21)',
  },
};

const BASE_URL = 'http://localhost:8080';

const Profile = () => {
  const nameRef = useRef('');
  const contentRef = useRef('');
  const addressRef = useRef('');
  const phoneRef = useRef('');
  const [form, setForm] = useState({
    name: '',
    content: '',
    type: 'none',
    address: '',
    phone: '',
  });

  console.log('----Form: ', form);

  const createProduct = () => {
    const dto = Object.assign(form, {
      name: nameRef.current.value,
      content: contentRef.current.value,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
    });
    // axios.post(`${BASE_URL}/api/books`, {
    //   form,
    // });
  };



  const handleSelectOption = (event) => {
    setForm({ ...form, type: event.target.value });
  };

  const categories = ['General', 'Comic', 'Poem', 'Hardcover', 'Novel', 'Textbook'];
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img style={style.image} src="/static/images/Profile.png" alt="error" />
        <div style={style.titlePanner}>
          <div style={style.titleFirst}>Book</div>
          <div style={style.titleSecond}>Your Space</div>
        </div>
        <div style={style.description}>
          “Actions are a better reflection of one’s character because it’s easy to say things, but
          difficult to act on them and follow through.”
        </div>
      </div>
      <div style={style.container}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-250px' }}>
            <img style={style.detailImage} src="/static/images/Avatar.png" alt="error" />
          </div>
        </div>
      </div>
      <div style={style.container}>
        <div style={{ marginTop: '150px', fontSize: '48px', fontWeight: '500' }}>Your Book</div>
        <Grid container spacing={3}>
          {Array(5)
            .fill(0)
            .map((p) => {
              return (
                <Grid item xs={12}>
                  <MediaControlCard src="/static/images/book1.png">
                    <div style={style.cardDescription}>
                      <div style={style.cardTitle}>The apple in my eyes is Emily</div>
                      <div style={style.cardContent}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
                      </div>
                      <Button style={style.cardDescriptionButton}>Edit</Button>
                    </div>
                  </MediaControlCard>
                </Grid>
              );
            })}
        </Grid>

        <div style={{ marginTop: '150px', fontSize: '48px', fontWeight: '500' }}>
          Create new book
        </div>
        <div style={style.form}>
          <div>Name of book</div>
          <input
            style={{
              padding: 15,
              border: '2px solid black',
              borderRadius: '10px',
              width: '100%',
              marginBottom: '30px',
            }}
            ref={nameRef}
            placeHolder="Enter name"
          ></input>
          <div>Description</div>
          <textarea
            style={{
              padding: 15,
              border: '2px solid black',
              borderRadius: '10px',
              width: '100%',
              marginBottom: '30px',
            }}
            ref={contentRef}
          ></textarea>
          <div>Categories</div>
          <Select value={form.type} onChange={handleSelectOption} style={{ marginBottom: 30 }}>
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
            {categories.map((cat) => {
              return <MenuItem value={cat}>{cat}</MenuItem>;
            })}
          </Select>
          <div>Address</div>
          <input
            style={{
              padding: 15,
              border: '2px solid black',
              borderRadius: '10px',
              width: '100%',
              marginBottom: '30px',
            }}
            ref={addressRef}
            placeHolder="Enter address"
          ></input>
          <div>Phone</div>
          <input
            style={{
              padding: 15,
              border: '2px solid black',
              borderRadius: '10px',
              width: '100%',
              marginBottom: '30px',
            }}
            ref={phoneRef}
            placeHolder="Enter phone"
          ></input>

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
            onClick={createProduct}
          >
              Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

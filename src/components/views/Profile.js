import React from 'react';

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
    fontSize: '24px'
  },
};

const Profile = () => {
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
    </div>
  );
};

export default Profile;

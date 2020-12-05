import React from 'react';

const style = {
  root: {
    width: '100%',
    backgroundColor: '#aaa'
  },
  container: {
    width: '80%',
    margin: '50px auto 0 auto',
    padding: '50px',
  },
  icon: {
    fontSize: '50px'
  },
  content: {
    fontSize: '20px'
  }
}

const Footer = (props) => {
  return (
    <div style={style.root}>
        <div style={style.container}>
        <div style={style.icon}>
          <span><i class="fa fa-facebook-square"></i></span>
          <span><i class="fa fa-instagram"></i></span>
        </div>
        <div style={style.content}>Copyright © 2020 BookExchange Inc. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;

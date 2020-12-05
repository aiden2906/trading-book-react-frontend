import React from 'react';

const style = {
  container: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: '30px'
  },
  image: {
    width: '50px',
    height: '50px',
  },
  title1: {
    fontWeight: 500,
    fontSize: 42,
    lineHeight: '59px',
    marginLeft: '37px'
  },
  title2: {
    fontSize: 30,
    lineHeight: '65px',
    marginLeft: '7px'
  }
}
const Header = (props) => {
  return <div style={style.container}>
    <div>
      <img style={style.image} src="/static/images/hamburger.png" alt="error"/>
    </div>
    <div style={style.title1}>BOOK</div>
    <div style={style.title2}>EXCHANGE</div>
  </div>
}

export default Header;
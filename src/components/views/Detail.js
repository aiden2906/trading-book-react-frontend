import React from 'react';
import MediaControlCard from '../elements/MediaControlCard';
import { useParams } from 'react-router-dom';

const style = {
  image: {
    width: '100%',
    height: 600
  },
  detailImage: {
    width: '535px',
    height: '796px'
  },
  container: {
    width: '80%',
    margin: 'auto',
  },
  title: {
    fontSize: '64px',
    fontWeight: 'bold',
    lineHeight: '89px',
    marginTop: '100px'
  },
  content: {
    fontSize: '35px',
    color: '#797979',
    lineHeight: '57px'
  },
  owner: {
    width: '100%',
    height: 'auto'
  },
  createdAt: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '56px',
    color: '#C4C4C4'
  },
  bigTitle: {
    color: '#83BB61',
    fontSize: '64px',
    fontWeight: 500,
    lineHeight: '89px',
  }
};

const Detail = (props) => {
  const { id } = useParams();
  console.log('--- Redirect to: ', id);
  return (
    <div>
      <div>
        <img style={style.image} src="/static/images/Panner.png" alt="error"/>
      </div>
      <div style={style.container}>
        <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', top: '-400px'}}> 
            <img style={style.detailImage} src="/static/images/DetailImage.png" alt="error"/>
          </div>
          <div style={{position: 'absolute',top: '40px', right: '0px', width: '62%'}}>
            <div style={style.createdAt}>2 days ago</div>
            <div style={style.bigTitle}>The apple in my eyes is Emily</div>
          </div>
        </div>
        <div style={{height: '300px'}}></div>
        <div style={style.title}>Description</div>
        <div style={style.content}>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as necessary, making this the
          first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
          with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </div>
        <div style={style.title}>Owner</div>
        <div style={style.owner}>
          <MediaControlCard></MediaControlCard>
        </div>
      </div>
    </div>
  );
};

export default Detail;

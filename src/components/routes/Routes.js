import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detail from '../views/Detail';
import Home from '../views/Home';
import Profile from '../views/Profile';

const Routes = () => {
    return (
      <section className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id' component={Detail} /> 
          <Route exact path='/profile' component={Profile} /> 
        </Switch>
      </section>
    );
  };
  
  export default Routes;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detail from '../views/Detail';

const Routes = () => {
    return (
      <section className='container'>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/detail' component={Detail} /> 
        </Switch>
      </section>
    );
  };
  
  export default Routes;
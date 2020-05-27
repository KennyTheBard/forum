import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Account from './account/Account';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
      
        <Switch>
          <Route path={"/user"} component={Account}/>
          <Route path={"/sub"} component={}/>
          <Route path={"/sub/:subId/posts"} component={}/>
          <Route path={"/sub/:subId/post/:postId"} component={}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;

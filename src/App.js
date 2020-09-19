import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Imports
import 'antd/dist/antd.css';
import Firebase from './firebase/firebase.js';

//Pages
import SignIn from './pages/SignIn/signin.component.jsx';
import Home from './pages/Home/home.component.jsx';

//Redux
import { connect } from 'react-redux';
import { STORE_TOKEN } from '../src/redux/firebase/firebase.actions.js';

function App(props) {
  const FIREBASE = new Firebase();
  props.dispatch(STORE_TOKEN(FIREBASE));

  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default connect()(App);

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import app from 'firebase/app';


//Imports
import './App.scss';
import 'antd/dist/antd.less';
import Firebase from './firebase/firebase.js';
import 'utilities-css/dist/utilities-css.css';

//Pages
import SignIn from './pages/SignIn/signin.component.jsx';
import Home from './pages/Home/home.component.jsx';

//Redux
import { connect } from 'react-redux';
import { STORE_TOKEN } from '../src/redux/firebase/firebase.actions.js';

function App(props) {
  const token = new Firebase();
  props.dispatch(STORE_TOKEN(token));

  return (
    <Router>
      <Switch>
        {/* <Route path='/signin'>
          <SignIn />
        </Route> */}
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default connect()(App);

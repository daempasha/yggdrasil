import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Imports
import 'antd/dist/antd.css';

//Pages
import SignIn from './pages/SignIn/signin.component.jsx';
import Home from './pages/Home/home.component.jsx';

function App() {
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

export default App;

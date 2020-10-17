import React from 'react';
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import UsersIndex from './components/UsersIndex'
import SignUp from './components/SignUp'
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/users'>
        <UsersIndex />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </div>
  );
}

export default App;

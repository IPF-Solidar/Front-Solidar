//import './App.css';
//import {useEffect, useState} from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import Login from './components/pages/Login'






function App() {

  
  const Routing = () => {

    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    )
  }
    return (
  <>
  
      
      <Router>
        <Navbar/>
        <Routing/>
      </Router>
  
  </>
  
    )
  }

export default App;
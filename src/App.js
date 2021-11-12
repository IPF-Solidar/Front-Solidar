//import './App.css';
//import {useEffect, useState} from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import Login from './components/pages/Login'
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';






function App() {

  
  const Routing = () => {

    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/register" component={Register}/>

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
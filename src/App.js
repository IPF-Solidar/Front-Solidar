//import {useEffect, useState} from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from "./components/pages/Landing";
import Login from './components/pages/Login'
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Home from  './components/pages/Home'
import Detalle from './components/pages/Detalle';
import FormPublicar from './components/pages/FormPublicar';
import PerfilUser from './components/pages/PerfilUser';
import Pagos from './components/pages/Pagos';
import NotFound from './components/pages/NotFound';

/* import { createContext, useContext, useReducer } from 'react'

import { reducer, initialState} from './utils/Reducer' */

/* export const UserContext = createContext() */
  
  /* const Routing = () => {

    const {state, dispatch} = useContext(UserContext)
    //rutas privadas
    if(state){
      return(
        <Switch>
          <Route exact path="/formularioP" component={FormPublicar}/>
          <Route exact path="/pagos/:proid" component={Pagos}/>
          <Route exact path="*" component={NotFound}/>
        </Switch>
      )
    }
    //rutas publicas
      if (!state){
        return(
          <Switch>
            <Route exact path="/detalle/:proid" component={Detalle}/>
            <Route exact path="/publicaciones" component={Home}/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/perfil" component={PerfilUser}/>
            <Route exact path="*" component={NotFound}/>
          </Switch>
        )
      }
    
    
  } */

function App() {

  const Routing = () => {
      return(
        <Switch>
            <Route exact path="/formularioP" component={FormPublicar}/>
            <Route exact path="/pagos/:proid" component={Pagos}/>
            <Route exact path="/detalle/:proid" component={Detalle}/>
            <Route exact path="/publicaciones" component={Home}/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/perfil" component={PerfilUser}/>
            <Route exact path="*" component={NotFound}/>
            <Route exact path="*" component={NotFound}/>
        </Switch>
      )
  }


  /* const [state, dispatch] = useReducer(reducer, initialState) */
/* <UserContext.Provider value = {{state, dispatch}}> */
/* </UserContext.Provider> */
    return (
      
      <Router>
        <Navbar/>
        <Routing />
      </Router>
      
    )
  }

export default App;
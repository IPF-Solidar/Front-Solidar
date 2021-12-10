//import {useEffect, useState} from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from "./components/pages/Landing";
import Login from './components/pages/Login'
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Home from  './components/pages/Home'
import Detalle from './components/pages/Detalle';
/* import {useState, useEffect} from 'react'; */
import FormPublicar from './components/pages/FormPublicar';
import PerfilUser from './components/pages/PerfilUser';
import Pagos from './components/pages/Pagos';


function App() {

/*   const url = "http://localhost:5000/api/get-publicaciones";

  const [stateProfesionales, setStateProfesionales] = useState([])

  const fetchDataProfesionales = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
          console.log(res + " Hola")
          setStateProfesionales(res)
      } catch (error) {console.log("Mini error "+error)}
  }

  useEffect(() => {
      fetchDataProfesionales()
  },[]) */
  
  const Routing = () => {

    return(
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/publicaciones" component={Home}/>
        <Route exact path="/formularioP" component={FormPublicar}/>
        <Route exact path="/detalle/:proid" component={Detalle}/>
        <Route exact path="/perfil" component={PerfilUser}/>
        <Route exact path="/pagos/:proid" component={Pagos}/>
      </Switch>
    )
  }


    return (
  <>
  
      
      <Router>
        <Navbar /* listProf={stateProfesionales ? stateProfesionales : null} *//>
        <Routing />
      </Router>
     
  </>
  
    )
  }

export default App;
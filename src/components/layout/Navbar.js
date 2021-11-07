import React  from 'react'
import { Link } from "react-router-dom";

import '../assets/css/font-awesome.css';
import '../assets/owl-carousel/assets/owl.carousel.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/estilo.css';




const Navbar = () => {
  
  

return (
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
      <div class="container"><a class="navbar-brand">SOLIDAR</a>
          <button class="navbar-toggler" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse"><span
                  class="bar1"></span> <span class="bar2"></span> <span class="bar3"></span></button>
          <div id="my-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item"><Link class="nav-link" to="/">Inicio</Link></li>
                  <li class="nav-item"><a class="nav-link" href="#services">Servicios</a></li>
                  <li class="nav-item"><a class="nav-link" href="#about">Ayuda</a></li>
                  <li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                  <Link class="btn btn-outline-dark my-2 my-sm-0 mr-3 text-uppercase" to="/login">Iniciar Sesion</Link>
                  <a href="#"class="btn btn-info my-2 my-sm-0 text-uppercase">Registrarse</a>
              </form>
          </div>
      </div>
  </nav>
 
</>
    )
}

export default Navbar

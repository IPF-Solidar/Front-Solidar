import React,{useState,useEffect}  from 'react'
import { Link } from "react-router-dom";


import '../assets/styles/css/bootstrap.css';
import '../assets/styles/css/fontawesome-all.css';
import '../assets/styles/css/swiper.css';
import '../assets/styles/css/magnific-popup.css';
import '../assets/styles/css/styles.css'; 

import logo from '../assets/styles/images/logo.svg'

import 'animate.css';



const Navbar = (props) => {
  
    const {listProf} = props

    const [Login, setLogin] = useState(null);

  useEffect(() => {
    const usuarioT = localStorage.getItem('Solidar-Usuario')
    if (usuarioT){
			const user = JSON.parse(usuarioT)
			setLogin(user)
		}
	}, [])

  const logaut = () => {
		window.localStorage.removeItem('Solidar-Usuario')
    window.location.href="/"
	}

    const renderCerrarSesion = () =>
{
  return ( 
    <li class="nav-item">
    <Link class="nav-link page-scroll" onClick={logaut}>Cerrar Sesion</Link>
    </li>
  )
}

const renderLoginButton = () => {
    return(
        <li class="nav-item">
            <Link to= "/login" class="nav-link page-scroll" href="#features">INICAR SESION</Link>
        </li>
    )
 }
 
 const renderRegisterButton = () => {
    return( 
        <li class="nav-item">
            <Link to="/register" class="nav-link page-scroll" href="#preview">REGISTRARSE</Link>
        </li>
 )
 }
 const renderDetallesButton = () => {
    return( 
        <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle page-scroll" href="#details" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">DETALLES</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="terms-conditions.html"><span class="item-text">TERMINOS Y CONDICIONES</span></a>
                        <div class="dropdown-items-divide-hr"></div>
                        <a class="dropdown-item" href="privacy-policy.html"><span class="item-text">PRIVACIDAD Y POLITICA</span></a>
                    </div>
        </li>
 )
 }

return (
  <>
  <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
        
         <a class="navbar-brand logo-text page-scroll" href="">Solidar</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-awesome fas fa-bars"></span>
            <span class="navbar-toggler-awesome fas fa-times"></span>
        </button>
        

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link to="/" class="nav-link page-scroll">INICIO <span class="sr-only">(current)</span></Link>
                </li>
                {
                    Login
                    ?""
                    :renderLoginButton()
                }
                  {
                    Login
                    ?renderCerrarSesion()
                    :renderRegisterButton()
                  }

            </ul>
            <span class="nav-item social-icons">
                <span class="fa-stack">
                    <a href="#your-link">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a href="#your-link">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div>
    </nav>
  </>
    )
}

export default Navbar

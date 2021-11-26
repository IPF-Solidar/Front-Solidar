import React,{useState,useEffect}  from 'react'
import { Link } from "react-router-dom";

import '../assets/css/font-awesome.css';
import '../assets/owl-carousel/assets/owl.carousel.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/estilo.css';
import 'animate.css';



const Navbar = (props) => {
  
    const {listProf} = props

    const [Login, setLogin] = useState(null);

  useEffect(() => {
    const usuarioT = localStorage.getItem('loggedUser')
    if (usuarioT){
			const user = JSON.parse(usuarioT)
			setLogin(user)
		}
	}, [])

  const logaut = () => {
		window.localStorage.removeItem('loggedUser')
    window.location.href="/login"
	}

    const renderCerrarSesion = () =>
{
  return ( 
  <button class="btn btn-info my-2 my-sm-0 text-uppercase"  onClick = {logaut}>
    CERRAR SESION
  </button>
  )
}

const renderLoginButton = () => {
    return(
        <Link class="btn btn-outline-dark my-2 my-sm-0 mr-3 text-uppercase" to="/login">Iniciar Sesion</Link>
    )
 }
 
 const renderRegisterButton = () => {
    return( 
        <Link to ="/register"class="btn btn-info my-2 my-sm-0 text-uppercase">Registrarse</Link>
 )
 }

return (
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
      <div class="container"><Link to="/"><a class="navbar-brand animate__animated animate__lightSpeedInLeft">SOLIDAR</a></Link>
          <button class="navbar-toggler" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse"><span
                  class="bar1"></span> <span class="bar2"></span> <span class="bar3"></span></button>
          <div id="my-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto">
              </ul>
              <form class="form-inline my-2 my-lg-0">
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
                  {/* <Link class ="btn btn-warning" type="button" to= {{
                        pathname:'/publicaciones',
                        datos:{profesionales: listProf}
                    }}
                    >INICIO
                    </Link> */}
              </form>
          </div>
      </div>
  </nav>
 
</>
    )
}

export default Navbar

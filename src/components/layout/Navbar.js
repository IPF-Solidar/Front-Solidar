import React,{useState,useEffect}  from 'react'
import { Link } from "react-router-dom";


import '../assets/styles/css/bootstrap.css';
import '../assets/styles/css/fontawesome-all.css';
import '../assets/styles/css/swiper.css';
import '../assets/styles/css/magnific-popup.css';
import '../assets/styles/css/styles.css'; 
import 'animate.css';
import { Toaster,toast } from 'react-hot-toast'


const Navbar = () => {
    const mostrarMensaje = () =>{
		toast('Bienvenido A Solidar!!!',
				{
					icon: '👍',
                    position:"bottom-right",
                    reverseOrder:'false',
					style: {
					borderRadius: '10px',
					background: '#333',
					color: '#04C3C0',
					},
				}
				);
	  }
    const [Login, setLogin] = useState(null);
    
  useEffect(() => {
    const usuarioT = localStorage.getItem('Solidar-Usuario')
    if (usuarioT){
			const user = JSON.parse(usuarioT)
			setLogin(user)
            mostrarMensaje()
           
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
    <Link class="nav-link page-scroll animate__animated animate__bounceInDown" onClick={logaut}>CERRAR SESION</Link>
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

 const renderPublicar = () => {
    return(
        <li class="nav-item">
            <Link to= "/formularioP" class="nav-link page-scroll animate__animated animate__bounceInDown" href="#features">CREAR HISTORIAS</Link>
        </li>
    )
 }


 const style2 = {
    width: '30px',
    height: '30px',
    verticalAlign: 'middle',
    marginRight: '2px',
    borderRadius: '15px',
    position: 'relative',
    left:'10px'
       
 }



 
return (
  <nav class="navbar navbar-expand-md navbar-dark navbar-custom">
        <Toaster/>
         <a class="navbar-brand logo-text page-scroll animate__animated animate__lightSpeedInLeft" href="">Solidar</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-awesome fas fa-bars"></span>
            <span class="navbar-toggler-awesome fas fa-times"></span>
        </button>
        

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link to="/" class="nav-link page-scroll animate__animated animate__bounceInDown">INICIO <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/publicaciones" class="nav-link page-scroll animate__animated animate__bounceInDown">DONAR <span class="sr-only">(current)</span></Link>
                </li>
                {
                    Login
                    ?renderPublicar()
                    :renderLoginButton()
                }
                  {
                    Login
                    ?renderCerrarSesion()
                    :renderRegisterButton()
                  }

                {
                    Login ? <li class="nav-item d-flex align-items-center ml-lg-3 ">
                    <Link to = '/perfil'><img alt="Image" src={Login.perfil} style={style2} /></Link>
                    <Link to = '/perfil' class='nav-link page-scroll '>{Login.nombre} {Login.apellido}</Link>
                </li>
                    :""
                }

            </ul>
            
        </div>
    </nav>
    )
}

export default Navbar

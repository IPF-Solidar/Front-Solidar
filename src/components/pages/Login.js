import React, {useState,useEffect}  from 'react'

import { Link } from 'react-router-dom'

import '../assets/Login_v1/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/Login_v1/vendor/animate/animate.css'
import '../assets/Login_v1/vendor/css-hamburgers/hamburgers.min.css'
import '../assets/Login_v1/vendor/select2/select2.min.css'
import '../assets/Login_v1/css/util.css'
import '../assets/Login_v1/css/main.css'
import loginServicios from '../assets/DB/login'

import logo from '../assets/Login_v1/images/img-03.png'
//import { useEffect, useState } from 'react'









const Login = () => {

	const[errorMessage, setErrorMessage] = useState (null)

	const [email,setemail] = useState('')
	const [password,setPassword] = useState('') 
	const [user, setUser] = useState(null);

	useEffect(()=>{
		const loggeUserJSON = window.localStorage.getItem('loggedUser')
		if (loggeUserJSON){
			const user = JSON.parse(loggeUserJSON)
			setUser(user)
			
			
		}
	},[])

	

	if (localStorage.getItem(null)){
		setUser('')
		console.log(user + " se limipo ")
	}

	const handleSubmit = async (event) =>{
		event.preventDefault()
		
		try{
			
			const user = await loginServicios.buscador({
				email,
				password
				
			})

			window.localStorage.setItem(
				'loggedUser', JSON.stringify(user)
			)

			
			
			setUser(user);
			setemail('');
			setPassword('');
			window.location.href="/"
			
		}catch(e){
			setErrorMessage('Usuario o Contraseña incorrecta')
			setTimeout(() => {
					setErrorMessage(null)
			}, 3000)
			console.log("Error",e)
		}
	}



    return (
        <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={logo} alt="IMG"/>
                    
				</div>

				<form class="login100-form validate-form" onSubmit={handleSubmit}>
					<span class="login100-form-title">
						SOLIDAR
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" 
						type="text" 
						name="email" 
						value={email}
						onChange={({target}) => setemail(target.value)}
						placeholder="Correo Electronico"/>
						
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" 
						type="password" 
						name="pass" 
						value={password}
						onChange={({target}) => setPassword(target.value)}
						placeholder="Contraseña"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							INICIAR SESION
						</button>
					</div>

					<p>{errorMessage}</p>

					<div class="text-center p-t-12">
						
						<a class="txt2" href="#">
							Olvidaste tu contraseña?
						</a> <br/> <br/>
						<Link to= "/register">
						<a class="txt2" href="#">
							Crear una cuenta
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
							</a>
							</Link>
					</div>

					
				</form>
			</div>
		</div>
	</div>
    
    )
}

export default Login

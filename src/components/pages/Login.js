import React, {useState,useEffect}  from 'react'

import { Link } from 'react-router-dom'


import loginServicios from '../assets/DB/login'
import '../assets/styles/Login/styleLogin.css'

//import { useEffect, useState } from 'react'









const Login = () => {

	const[errorMessage, setErrorMessage] = useState (null)

	const [email,setemail] = useState('')
	const [password,setPassword] = useState('') 
	const [user, setUser] = useState(null);

	useEffect(()=>{
		const loggeUserJSON = window.localStorage.getItem('Solidar-Usuario')
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
			console.log(email, password)
			const user = await loginServicios.buscador({
				email,
				password
				
			})

			window.localStorage.setItem(
				'Solidar-Usuario', JSON.stringify(user)
			)

			
			
			setUser(user);
			setemail('');
			setPassword('');
			window.location.href="/"
			
		}catch(e){
			setErrorMessage('Usuario o Contraseña no existe')
			setTimeout(() => {
					setErrorMessage(null)
			}, 3000)
			console.log("Error",e)
		}
	}



    return (
	<body>
    <div class="login-dark">
        <form  onSubmit={handleSubmit}>
            <h2 class="sr-only">FORMULARIO</h2>
            <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
            <div class="form-group">
			<input class="form-control" 
			type="email" 
			name="email" 
			value={email}
			onChange={({target}) => setemail(target.value)}
			placeholder="Correo Electronico"
			
			/></div>
            <div class="form-group">
			<input class="form-control" 
			type="password" 
			name="password" 
			value={password}
			onChange={({target}) => setPassword(target.value)}
			placeholder="Contraseña"
			
			/></div>
            <div class="form-group"><button class="btn btn-primary btn-block">INICIAR SESION</button></div><a href="#" class="forgot">Olvidaste la contraseña?</a>
			<br/>
			
			<p style={{textAlign:"center", color:"red"}}>{errorMessage}</p>
			
			</form>
    </div>
    </body>
    
    )
}

export default Login

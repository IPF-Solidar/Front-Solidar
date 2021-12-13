import React, {useState,useEffect,useContext}  from 'react'

import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import { Toaster } from 'react-hot-toast'
import loginServicios from '../assets/DB/login'
import '../assets/styles/Login/styleLogin.css'


const Login = () => {

/* 	const {state, dispatch} = useContext(UserContext); */

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

			/* dispatch({ type: "TOKEN", payload: user.token}) */

			
			
			setUser(user);
			setemail('');
			setPassword('');
			window.location.href="/publicaciones"
		
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
		 <Toaster/>
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
            <div class="form-group"><button class="btn btn-primary btn-block">INICIAR SESION</button><br/></div><a href="#" class="forgot">Olvidaste la contraseña?</a>
			<br/>
			
			<p style={{textAlign:"center", color:"red"}}>{errorMessage}</p>
			
			</form>
    </div>
    </body>
    
    )
}

export default Login

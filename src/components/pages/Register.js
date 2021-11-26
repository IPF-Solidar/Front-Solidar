import React, {useState,useEffect} from 'react'
import { useHistory} from "react-router-dom"
import '../assets/Login_v1/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/Login_v1/vendor/animate/animate.css'
import '../assets/Login_v1/vendor/css-hamburgers/hamburgers.min.css'
import '../assets/Login_v1/vendor/select2/select2.min.css'
import '../assets/Login_v1/css/util.css'
import '../assets/Login_v1/css/main.css'

import logo from '../assets/Login_v1/images/img-03.png'

const Register = () => {

	const history= useHistory()

	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [dni, setDni] = useState('');
	const [fechaNacimiento, setFechaNacimiento] = useState('');
	const [domicilio, setDomicilio] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	

	const [registrado, setRegistrado] = useState(null)


	const RegistrarNuevoUser = async () => {

		let myHeaders = new Headers();

		myHeaders.append("Content-Type", "application/json")

		const raw = JSON.stringify({
			nombre:nombre,
			apellido:apellido,
			dni:dni,
			fecha_nacimiento:fechaNacimiento,
			domicilio:domicilio,
			email:email,
			password:password
		})

		const options = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		}

		const postData = await fetch("http://localhost:5000/api/create-user", options)
		const res = postData.json()
		console.log(res)
		setRegistrado(true)

		
	}

	useEffect(() => {
		if(registrado){
			history.push('/login')
		}
	}, [registrado])




    return (
        <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={logo} alt="IMG"/>
                    
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						SOLIDAR
					</span>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" 
						value= {nombre}
						onChange={(e) => {setNombre(e.target.value)}}
						type="text" 
						name="email" 
						placeholder="Nombre"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
                            <i class="bx bxs-user" aria-hidden="true"></i>
						</span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate = "Usuario incorrecto">
						<input class="input100" 
						value= {apellido}
						onChange={(e) => {setApellido(e.target.value)}}
						type="text" 
						name="email" 
						placeholder="Apellido"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
                            <i class="bx bxs-user" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="wrap-input100 validate-input" data-validate = "Dni mal ingresado">
						<input class="input100" 
						value= {dni}
						onChange={(e) => {setDni(e.target.value)}}
						type="text" 
						name="dni" 
						placeholder="DNI"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
                            <i class="bx bxs-user-pin" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Fecha de nacimiento">
						<input class="input100" 
						value= {fechaNacimiento}
						onChange={(e) => {setFechaNacimiento(e.target.value)}}
						type="date" 
						name="fecha_nacimiento" 
						placeholder="Fecha De Nacimiento"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
                            <i class="bx bxs-calendar" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "">
						<input class="input100" 
						value= {domicilio}
						onChange={(e) => {setDomicilio(e.target.value)}}
						type="text" 
						name="Domicilio" 
						placeholder="Domicilio"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
                            <i class="bx bxs-home-heart" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" 
						value= {email}
						onChange={(e) => {setEmail(e.target.value)}}
						type="text" 
						name="email" 
						placeholder="Correo Electronico"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="bx bx-mail-send" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100"
						value= {password}
						onChange={(e) => {setPassword(e.target.value)}}
						 type="password"
						  name="pass"
						   placeholder="Contraseña"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" onClick={(e) => {RegistrarNuevoUser(e.preventDefault())}}
						>REGISTRARSE
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
    
    )
}



export default Register

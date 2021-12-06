import React, {useState,useEffect} from 'react'
import { useHistory} from "react-router-dom"

import '../assets/styles/Login/styleRegistro.css'



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
	<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>BIENVENIDO A SOLIDAR</h3>
                        <p>Ya tienes una cuenta en solidar ?</p>
                        <input type="submit" name="" value="INICAR SESION"/><br/>
                    </div>
                    <div class="col-md-9 register-right"> 
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading" style={{color:"white"}}>REGISTRO!!!</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input 
											type="text"
											class="form-control" 
											value= {nombre}
											onChange={(e) => {setNombre(e.target.value)}}
											placeholder="Nombre *" />
                                        </div>
                                        <div class="form-group">
                                            <input 
											type="text" 
											class="form-control" 
											value= {apellido}
											onChange={(e) => {setApellido(e.target.value)}}
											placeholder="Apellido *"  />
                                        </div>
                                        <div class="form-group">
                                            <input 
											type="text" 
											class="form-control"
											value= {dni}
											onChange={(e) => {setDni(e.target.value)}}
											placeholder="DNI *"  />
                                        </div>
                                        <div class="form-group">
                                            <input 
											type="text" 
											class="form-control"
											value= {domicilio}
											onChange={(e) => {setDomicilio(e.target.value)}} 
											placeholder="Domicilio *"  />
                                        </div>

                                    </div>
                                    <div class="col-md-6">
										<div class="form-group">
												<input 
												type="date" 
												class="form-control" 
												value= {fechaNacimiento}
												onChange={(e) => {setFechaNacimiento(e.target.value)}}
												placeholder="Fecha De Cumpleaños *"  />
										</div>
                                        <div class="form-group">
                                            <input 
											type="email" 
											class="form-control" 
											value= {email}
											onChange={(e) => {setEmail(e.target.value)}}
											placeholder="Correo Electrnico *"  />
                                        </div>
										<div class="form-group">
											<input 
											type="password" 
											class="form-control" 
											value= {password}
											onChange={(e) => {setPassword(e.target.value)}}
											placeholder="Contraseña *" />
										</div>
                                        <input type="button" class="btnRegister" onClick={RegistrarNuevoUser} value="Register"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
    )
}



export default Register

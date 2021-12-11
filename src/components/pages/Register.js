import React, {useState,useEffect} from 'react'
import { useHistory} from "react-router-dom"
import { Link } from 'react-router-dom'
import '../assets/styles/Login/styleRegistro.css'
import * as yup from 'yup';
import { Container, Form, Button } from 'semantic-ui-react' ;
import { useFormik } from 'formik';
import { Toaster,toast } from 'react-hot-toast'

const Register = () => {

	const formik = useFormik({
		initialValues:{
			nombre: "",
			apellido:"",
			dni:"",
			domicilio:"",
			cumpleaños:"",
			correo:"",
			contraseña:"",
		},
		validationSchema: yup.object({
			nombre: yup.string().required("El Nombre es obligatorio"),
			apellido: yup.string().required("El Apellido es obligatorio"),
			dni: yup.string().min(7, "El DNI debe tener como minimo 7 caracteres").required("El Dni es obligatorio"),
			cumpleaños: yup.date().required("Fecha de Nacimiento es obligatorio"),
			domicilio: yup.string().required("El Domicilio es obligatorio"),
			correo: yup.string("El email no es valido").email("El Correo Electronico es incorrecto").required("El Correo Electronico es obligatorio"),
			contraseña: yup.string().min(6,"La contraseña debe tener minimo 6 caracteres").required("La contraseña no es valida"),
		}),
		onSubmit: async (formData)  =>{
			let myHeaders = new Headers();

			myHeaders.append("Content-Type", "application/json")

			const raw = JSON.stringify({
				nombre:formData.nombre,
				apellido:formData.apellido,
				dni:formData.dni,
				fecha_nacimiento:formData.cumpleaños,
				domicilio:formData.domicilio,
				email:formData.correo,
				password:formData.contraseña
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
			mensajeRegistro()
		},
	});

	const mensajeRegistro = () =>{
		toast.success('Se Registro Correctamente',{
		  position:"top-right",
		  reverseOrder:"false"
		})
	  }

	const history= useHistory()

	const [registrado, setRegistrado] = useState(null)



	useEffect(() => {
		if(registrado){
			history.push('/login')
		}
	}, [registrado])




    return ( 
		
<Container>
<Toaster/>
	<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://i.pinimg.com/originals/b5/20/59/b52059655c9921bfac4d9e6c82f80a0f.png" alt=""/>
                        <h3>BIENVENIDO A SOLIDAR</h3>
                        <p>Ya tienes una cuenta en solidar ?</p>
                        <Link to="/login"><input type="submit" name="" value="INICAR SESION"/></Link><br/>
                    </div>
                    <div class="col-md-9 register-right"> 
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading" style={{color:"white"}}>REGISTRO!!!</h3>
								<form onSubmit={formik.handleSubmit}>
								<div class="row register-form">
                                    
                                        
									
									<div class="col-md-6">
										<div class="form-group">
											<Form.Input type="text"
												class="form-control" 
												
												/* onChange={(e) => {setNombre(e.target.value)}} */
												placeholder="Nombre *" 
												name="nombre"
												onChange={formik.handleChange}
												error={formik.errors.nombre }
											/>
										</div>	
										<div class="form-group">
											<Form.Input
												type="text" 
												class="form-control" 
												
												/* onChange={(e) => {setApellido(e.target.value)}} */
												placeholder="Apellido *"
												name="apellido"
												onChange={formik.handleChange}
												error={formik.errors.apellido}
											/>
										</div>
										<div class="form-group">
											<Form.Input
												type="text" 
												class="form-control"
												
												/* onChange={(e) => {setDni(e.target.value)}} */
												placeholder="DNI *"
												name="dni"
												onChange={formik.handleChange}
												error={formik.errors.dni}
											/>
										</div>
										<div class="form-group">
											<Form.Input
												type="text" 
												class="form-control"
												
												/* onChange={(e) => {setDomicilio(e.target.value)}}  */
												placeholder="Domicilio *"
												name="domicilio"
												onChange={formik.handleChange}
												error={formik.errors.domicilio}
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<Form.Input
												type="date" 
												class="form-control" 
												
												/* onChange={(e) => {setFechaNacimiento(e.target.value)}} */
												placeholder="Fecha De Cumpleaños *"
												name="cumpleaños"
												onChange={formik.handleChange}
												error={formik.errors.cumpleaños}
											/>
										</div>
										<div class="form-group">
											<Form.Input
												type="email" 
												class="form-control" 
												
												/* onChange={(e) => {setEmail(e.target.value)}} */
												placeholder="Correo Electronico *"
												name="correo"
												onChange={formik.handleChange}
												error={formik.errors.correo}
											/>
										</div>
										<div class="form-group">
											<Form.Input
												type="password" 
												class="form-control" 
												
												/* onChange={(e) => {setPassword(e.target.value)}} */
												placeholder="Contraseña *"
												name="contraseña"
												onChange={formik.handleChange}
												error={formik.errors.contraseña}
											/>
										</div>
                                        <button type="submit" class="btnRegister"
										/* disabled={habilitado ? false : true} */
										/* onClick={RegistrarNuevoUser} */ >Enviar</button>
									</div>	
								</div>
								</form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
</Container>
    )
}



export default Register


/* 

<div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input 
											type="text"
											class="form-control" 
											value= {nombre}
											onChange={(e) => {setNombre(e.target.value)}}
											placeholder="Nombre *" 
											
											/>
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
											placeholder="Correo Electronico *"  />
                                        </div>
										<div class="form-group">
											<input 
											type="password" 
											class="form-control" 
											value= {password}
											onChange={(e) => {setPassword(e.target.value)}}
											placeholder="Contraseña *" />
										</div>
                                        <button type="button" class="btnRegister"
										disabled={habilitado ? false : true}
										onClick={RegistrarNuevoUser} >{ habilitado ? "Registrarse" : "Desactivado"}</button>
                                    </div>
                                </div>


*/
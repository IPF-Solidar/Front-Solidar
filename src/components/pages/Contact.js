import React from 'react'
import '../assets/styles/Contacto/css/main.css'
import '../assets/styles/Contacto/css/util.css'
import portada from '../assets/styles/Contacto/images/img-01.png'



const Contact = () => {
    return (
        <>
           <div class="contact1">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
				<img src={portada} alt="IMG"/>
			</div>

			<form class="contact1-form validate-form">
				<span class="contact1-form-title">
					SOLIDAR CONTACTO
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Nombre es requerido">
					<input class="input1" type="text" name="name" placeholder="Nombre Completo"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Email no valido: ex@abc.xyz">
					<input class="input1" type="text" name="email" placeholder="Correo Electronico"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input class="input1" type="text" name="subject" placeholder="Titulo"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea class="input1" name="message" placeholder="Mensaje"></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn">
						<span>
							Enviar Email
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
        </>
    )
}

export default Contact

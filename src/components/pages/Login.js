import React from 'react'



import '../assets/Login_v1/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/Login_v1/vendor/animate/animate.css'
import '../assets/Login_v1/vendor/css-hamburgers/hamburgers.min.css'
import '../assets/Login_v1/vendor/select2/select2.min.css'
import '../assets/Login_v1/css/util.css'
import '../assets/Login_v1/css/main.css'

import logo from '../assets/Login_v1/images/img-01.png'










const Login = () => {
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
						<input class="input100" type="text" name="email" placeholder="Correo Electronico"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Contraseña"/>
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

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="#">
							Crear una cuenta
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    
    )
}

export default Login

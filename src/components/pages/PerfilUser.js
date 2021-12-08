/* import React,{useEffect, useState} from 'react'
import '../assets/styles/css/perfil/perfil.css'


const PerfilUser = () => {
 
    const CorreoUser = localStorage.getItem('Solidar-Usuario')
    const [perfil, setPerfil] = useState();

    if (CorreoUser){
        const parse = JSON.parse(CorreoUser);
        var correo = parse.correo;
    }

    const mostrarDatos = async () => {

        let myHeaders = new Headers();

		myHeaders.append("Content-Type", "application/json")


		const raw = JSON.stringify({
        email:correo		
		})

		const options = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		}
       
		const postData = await fetch("http://localhost:5000/api/get-perfil", options)
		const res = postData.json()
		setPerfil(res)
        console.log(res)	
	}

    useEffect(() => {
        mostrarDatos()
    },[CorreoUser])

    if(!perfil){
		return null;
	}

    return (
        <div>
            {
               
            perfil.length > 0 ? perfil.map(item => { 
                console.log(perfil)
            return( 
           
            <div class="wrapper bg-white mt-sm-5">
    <h4 class="pb-4 border-bottom">Configuración de la cuenta</h4>
    <div class="d-flex align-items-start py-3 border-bottom"> <img src={item.fotoPerfil} class="img" alt=""/>
        <div class="pl-sm-4 pl-2" id="img-section"> <b>Foto de perfil</b>
            <p>Accepted file type .png. Less than 1MB</p> <input type="file" class="btn button border"/><b>Subir Foto</b>
        </div>
    </div>
    <div class="py-2">
        <div class="row py-2">
            <div class="col-md-6"> <label for="firstname">Nombre</label> <input type="text" class="bg-light form-control" placeholder={item.nombre}/> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="lastname">Apellido</label> <input type="text" class="bg-light form-control" placeholder="Smith"/> </div>
        </div>
        <div class="row py-2">
            <div class="col-md-6"> <label for="email">Correo Electronico</label> <input disabled type="text" class="bg-light form-control" placeholder="steve_@email.com"/> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="phone">D.N.I</label> <input disabled type="tel" class="bg-light form-control" placeholder="+1 213-548-6015"/> </div>
        </div>
        <div class="row py-2">
            <div class="col-md-6"> <label for="text">Domicilio</label> <input disabled type="text" class="bg-light form-control" placeholder="steve_@email.com"/> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="phone">D.N.I</label> <input disabled type="tel" class="bg-light form-control" placeholder="+1 213-548-6015"/> </div>
        </div>
        <div class="py-3 pb-4 border-bottom"> <button class="btn btn-primary mr-3">Save Changes</button> <button class="btn border button">Cancel</button> </div>
        <div class="d-sm-flex align-items-center pt-3" id="deactivate">
            <div> <b>Deactivate your account</b>
                <p>Details about your company account and password</p>
            </div>
            <div class="ml-auto"> <button class="btn danger">Deactivate</button> </div>
        </div>
    </div>
</div>
)
}): <h1 style={{margin:'auto', color:'black'}}><b>NO SE HAN CARGADO LOS DATOS</b></h1>
}
        </div>
    )
}

export default PerfilUser */

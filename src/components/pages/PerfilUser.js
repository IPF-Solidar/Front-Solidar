import React,{useEffect, useState} from 'react'
import '../assets/styles/css/perfil/perfil.css'


const PerfilUser = () => {
 
    const CorreoUser = localStorage.getItem('Solidar-Usuario')
    const [perfil, setPerfil] = useState();

    if (CorreoUser){
        const parse = JSON.parse(CorreoUser);
        var correo = parse.correo;
    }

    const url = "http://localhost:5000/api/get-perfil/"+correo;

    const mostrarDatos = async () => {
        try {
            const peticion = await fetch(url)
            const res = await peticion.json()
            /* console.log(res + 'xd') */
            setPerfil(res)
        } catch (error) {console.log(error)}
    }

    useEffect(() => {
        mostrarDatos()
    },[])

    /* console.log(perfil) */
    if(!perfil){
		return null;
	}
    
    return (
        <div>
            
           
            <div class="wrapper bg-white mt-sm-5">
    <h4 class="pb-4 border-bottom">Configuración de la cuenta</h4>
    <div class="d-flex align-perfils-start py-3 border-bottom"> <img src={perfil.fotoPerfil} class="img" alt=""/>
        <div class="pl-sm-4 pl-2" id="img-section"> <b>Foto de perfil</b>
            <p>Acepta archivos menores a 1MB</p> <input type="file" class="btn button border"/><b>Subir Foto</b>
        </div>
    </div>
    <div class="py-2">
        <div class="row py-2">
            <div class="col-md-6"> <label for="firstname">Nombre</label> <input type="text" class="bg-light form-control" value={perfil.nombre}/> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="lastname">Apellido</label> <input type="text" class="bg-light form-control" value={perfil.apellido}/> </div>
        </div>
        <div class="row py-2">
            <div class="col-md-6"> <label for="email">Correo Electronico</label> <input type="text" class="bg-light form-control" value={perfil.email}/> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="phone">D.N.I</label> <input disabled type="tel" class="bg-light form-control" value={perfil.dni}/> </div>
        </div>
        <div class="row py-2">
            <div class="col-md-6"> <label for="text">Domicilio</label> <input disabled type="text" class="bg-light form-control" value={perfil.domicilio}/> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="phone">Fecha De Nacimiento</label> <input disabled type="tel" class="bg-light form-control" value={perfil.fecha_nacimiento}/> </div>
        </div>
        <div class="py-3 pb-4 border-bottom"> <button class="btn btn-primary mr-3">Guardar Cambios</button> <button class="btn border button">Cancelar</button> </div>
        <div class="d-sm-flex align-perfils-center pt-3" id="deactivate">
            <div> <b>Desactivar Cuenta</b>
                <p>Si desactivas tu cuenta solo un admin
                     podra activarla nuevamente</p>
            </div>
            <div class="ml-auto"> <button class="btn danger">DESACTIVAR</button> </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default PerfilUser

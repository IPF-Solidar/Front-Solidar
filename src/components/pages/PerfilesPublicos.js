import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router';
import '../assets/styles/css/perfil/perfilesPublicos.css'

const PerfilesPublicos = () => {

    const [perfil, setPerfil] = useState(null)
    const {idperfil} = useParams();
    console.log(idperfil)
    const url = 'http://localhost:5000/api/get-user/' + idperfil;

    const mostrarDatos = async () => {
        try {
            const peticion = await fetch(url)
            const res = await peticion.json()
            console.log(res)
            setPerfil(res)
        } catch (error) {console.log(error)}
    }

    useEffect(() => {
        mostrarDatos()
    },[])

    if(!perfil){
        return null
    }

  
        let fecha = new Date(perfil.fecha_nacimiento)
        const dia = (fecha.getDate()+1);
        const mes = (fecha.getMonth()+1)
        const año = fecha.getFullYear()
        var fechaPublicacion =  dia +'/'+ mes +  '/' + año
    

    return (
        <div class="container-perfilPublico">
            <div class="card-container">
	<span class="pro">SOLIDAR</span>
	<img class="round" src={perfil.fotoPerfil} alt="user" />
	<h3>{perfil.nombre} {perfil.apellido}</h3>
	<h6>Formosa</h6>
    <br/>
	<p>Fecha de Nacimiento: <b>{fechaPublicacion}</b></p>
	
	<div class="buttons">
		<button class="primary">
			Mensaje
		</button>
	</div>
	<div class="skills">
		
	</div>
</div>

<footer>
	<p>
		SOLIDAR <i class="fa fa-heart"></i> AYUDEMOS A TODOS POR IGUAL
	</p>
</footer>
        </div>
    )
}

export default PerfilesPublicos

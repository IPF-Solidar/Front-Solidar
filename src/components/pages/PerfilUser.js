import React,{useEffect, useState} from 'react'
import '../assets/styles/css/perfil/perfil.css'


const PerfilUser = () => {
 
    const CorreoUser = localStorage.getItem('Solidar-Usuario')
    const [perfil, setPerfil] = useState();

    const [edit, setEdit] = useState(false);

    const ActivarEdit = () =>{
        setEdit(true)
    }
    const CancelarEdit = () =>{
        setEdit(false)
    }

    
        
    

       /*  const [nombre, setNombre] = useState(null)
        const [apellido, setApellido] = useState(null)
        const [email, setEmail] = useState(null)
        const [domicilio, setDomicilio] = useState(null) */


    

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
    
    const GuardarDatos = async () =>{
       
    }
    
    return (
        
<div class="container emp-profile">
    
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={perfil.fotoPerfil} alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Actualizar Foto
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                    {perfil.nombre} {perfil.apellido}
                                    </h5>
                                    <h6>
                                        SOLIDAR
                                    </h6>
                                    <p class="proile-rating">DNI: <span>{perfil.dni}</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Información Personal</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    {
                        !edit ?
                        <div class="col-md-2">
                        <input type='button' onClick={ActivarEdit} class="profile-edit-btn" name="btnAddMore"  value="Editar Perfil"/>
                        </div>
                    :""
                    }
                   
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            {/* <p>PUBLICACIONES</p> */}
                            {/* <a href="http://localhost:3000/detalle/61b103bef237f2e83cb43c5c">Juguetes Para Niño</a><br/> */}
                            
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        {
                                            !edit ?
                                            <div>
                                                <div class="row">
                                            <div class="col-md-6">
                                                <label>Nombre</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{perfil.nombre}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Apellido</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{perfil.apellido}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{perfil.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Domicilio</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{perfil.domicilio}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Fecha De Nacimiento</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{perfil.fecha_nacimiento}</p>
                                            </div>
                                        </div>
                                            </div>

                                            :

                                            <div>
                                                <div class="row">
                                            <div class="col-md-6">
                                                <label>Nombre</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input value={perfil.nombre} />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Apellido</label>
                                            </div>
                                            <div class="col-md-6">
                                            <input value={perfil.apellido} />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                            <input value={perfil.email}/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Domicilio</label>
                                            </div>
                                            <div class="col-md-6">
                                            <input value={perfil.domicilio}/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Fecha De Nacimiento</label>
                                            </div>
                                            <div class="col-md-6">
                                            <input disabled value={perfil.fecha_nacimiento}/>
                                            </div>
                                        </div>
                                        <br/>
                                            <div class=''>
                                            <button type="button" class="btn btn-outline-success mr-4" onClick={GuardarDatos}>Guardar Cambios</button>
                                        <button type="button" class="btn btn-outline-danger" onClick={CancelarEdit}>Cancelar</button>
                                        </div>
                                            </div>
                                        }
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    )
}

export default PerfilUser

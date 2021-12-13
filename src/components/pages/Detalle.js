//import animals from '../../assets/slider-01.jpg'
import React,{useEffect, useState} from 'react';
import '../assets/styles/css/detalles/detalles.css'
import parse from 'html-react-parser';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import login from '../assets/DB/login';


const Detalle = () => {

    const [Login, setLogin] = useState(null);

    const [nuevoComentario,setNuevoComentario] = useState(null);

    const fechaHoy = new Date()
    const dia = (fechaHoy.getDate());
    const mes = (fechaHoy.getMonth()+1)
    const año = fechaHoy.getFullYear()
    const fechaActual =  dia +'/'+ mes +  '/' + año
    /* console.log(fechaActual) */

  
    
    
    useEffect(() => {
      const usuarioT = localStorage.getItem('Solidar-Usuario')
      if (usuarioT){
              const user = JSON.parse(usuarioT)
              setLogin(user)
             
          }
      }, [])

    const {proid} = useParams();
	//console.log(proid + " xdxdxd");
    
	const [statePublicacion, setStatePublicacion] = useState(0);
    /* const [comentarios, setComentarios] = useState([]); */
   


    const url = "http://localhost:5000/api/get-publicaciones/"+proid;

  const fetchDataPublicacionUnica = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
          /* console.log(res + 'xd') */
          setStatePublicacion(res)
      } catch (error) {console.log(error)}
  }

  const [comentarios, setComentarios] = useState ([])
	const urlC = "http://localhost:5000/api/get-comentariosUnicos/"+proid;

  const fetchDataComentarios = async () => {
      try {
          const peticion = await fetch(urlC)
          const res = await peticion.json()
          /* console.log(res ) */
          setComentarios(res)
         
      } catch (error) {console.log(error)}
  }

  useEffect(() => {
    fetchDataComentarios()
  },[])
	
	

  useEffect(() => {
      fetchDataPublicacionUnica()
  },[proid])


    if(!comentarios){
        return null;
    }
	if(!statePublicacion){
		return null;
	}



    
    const guardarComentario = async (e) => {
        e.preventDefault()

			const raw = JSON.stringify({
				idPublicacion: proid,
				fecha: fechaActual,
				descripcion: nuevoComentario,
				
			})

			const options = {
				method: 'POST',
				headers: {
                    'x-token': Login.token,
                    'Content-Type': 'application/json'
                },
				body: raw,
				redirect: 'follow'
			}

			const postData = await fetch("http://localhost:5000/api/create-comentarios", options)
			const res = postData.json()
			console.log(res)
            setNuevoComentario('')
            fetchDataComentarios()
    }


    const descr = parse(statePublicacion.descripcion)
  
    const progress = (statePublicacion.dineroActual/statePublicacion.objetivo)*100;
 
    
    return (
        <>
         <div class="contenidoDetalles">
        <figure class="portada-solidar-detalles">
                        <img src={statePublicacion.imgUrl} alt="Portada"/>
                </figure>
        <div class="tabset">
                <input type="radio" name="tabset" id="tab1" aria-controls="marzen" /* checked *//>
                <label for="tab1">PUBLICACION</label>

                <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" /> 
                <label for="tab2">COMENTARIOS</label>
                
                <div class="tab-panels">
                    <section id="marzen" class="tab-panel">
                   
            <article>
                
                    
                    <br/>
                    <div class="container">
                        <div class="container-solidar">
                            <div class="titulo-detalles">
                                <h2>{statePublicacion.titulo}</h2>
                            </div>
                            <hr/>
                            <div class="descripcion-detalles">
                                <p>
                                   {descr}
                                </p>
                            </div>
                            { progress < 100 ?
                                <div class="card-detalles-donacion">
                                    <br/>
                                    <h5>¿QUIERES AYUDAR?</h5>
                                    {
                                        Login  ?
                                        <Link to ={{pathname:'/pagos/' + statePublicacion._id}}><button class="button" >
                                        <span class="button__text">
                                        <span>D</span><span>O</span><span>N</span><span>A</span><span>R</span>
                                        </span>
                                            <svg class="button__svg" role="presentational" viewBox="0 0 600 600">
                                            <defs>
                                                <clipPath id="myClip">
                                                <rect x="0" y="0" width="100%" height="50%" />
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#myClip)">
                                                <g id="money">
                                                <path d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                                                <path d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                                                </g>
                                                <g id="creditcard">
                                                <path d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z" fill="#a76fe2" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                                                <path d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z" fill="#ffdc67" />
                                                <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
                                                </g>
                                            </g>
                                            <g id="wallet">
                                                <path d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                                                <path d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                                                <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                                                <path d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z" fill="#7b8f91" />
                                                <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
                                            </g>
                                        
                                            </svg>
                                    </button></Link>
                                    :<Link to="/login"><h4 style={{fontFamily:'arial', textAlign:'center', color:'black'}}>INCIAR SESIÓN</h4></Link>
                                    }
                                        
                                        
                                        
                                </div>
                                :""
                            }
                                
                            </div>  
                        </div>
            </article>
      
                </section>
                    <section id="rauchbier" class="tab-panel">
                    <section class="content-item" id="comments">
                        <div class="container">   
                            <div class="row">
                                <div class="col-sm-8">   
                                    <form>
                                        <h3 class="pull-left">Nuevo Comentario</h3>
                                        
                                        <fieldset>
                                            <div class="row">
                                                <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                                    <textarea class="form-control" id="message" placeholder="Escribir comentario..." value={nuevoComentario} onChange={(e) => {setNuevoComentario(e.target.value)}} required></textarea>
                                                </div>
                                            </div>  
                                            <button type='submit' class="btn btn-success pull-right" onClick={guardarComentario}>Enviar</button>	
                                        </fieldset>
                                       
                                    </form>
                
                                            <h3 class="coment-h3">Comentarios</h3>
                                            
                                            { 
                                                comentarios.length > 0 ? comentarios.map(item => { 
                                                    let fecha = new Date(item.fecha)
                                                    const dia = (fecha.getDate()+1);
                                                    const mes = (fecha.getMonth()+1)
                                                    const año = fecha.getFullYear()
                                                    const fechaPublicacion =  dia +'/'+ mes +  '/' + año
                                                    
                                                    return( 
                                                        <div class="media">
                                                        <a class="pull-left" href="#"><img class="media-object" style={{borderRadius:'40px'}} src={item.autor.fotoPerfil} alt=""/></a>
                                                        <div class="media-body">
                                                            <Link to={{pathname:'/perfiles/' + item.autor._id}} style={{textDecoration: 'none'}}><h4 class="media-heading" >{item.autor.nombre} {item.autor.apellido}</h4></Link>
                                                            <p>{item.descripcion}</p>
                                                            <ul class="list-unstyled list-inline media-detail pull-left">
                                                                <li><i class="fa fa-calendar"></i>{fechaPublicacion}</li>                                                     
                                                            </ul>

                                                        </div>
                                                    </div> 
                                                    )
                                                    }): <div><br/><h3 style={{margin:'auto', color:'white'}}><b>No Hay Comentarios...</b></h3></div>
                                                }
                                        </div>
                                    </div>
                                </div>
                            </section>
                    </section>
                    
                </div>
                
                </div>
                
           
                </div>
        </>
    )
}

export default Detalle
//import animals from '../../assets/slider-01.jpg'
import React,{useEffect, useState} from 'react';
import '../assets/styles/css/detalles/detalles.css'
import parse from 'html-react-parser';

import { useParams } from 'react-router';


const Detalle = () => {
        
    const {proid} = useParams();
	//console.log(proid + " xdxdxd");
    const [montoD, setDonacion] = useState(null);
	const [stateProfesionales, setStateProfesionales] = useState(null);

    useEffect(() =>{
        console.log(montoD)
    },[montoD]);

	const url = "http://localhost:5000/api/get-publicaciones/"+proid;

  const fetchDataProfesionales = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
          console.log(res + 'xd')
          setStateProfesionales(res)
      } catch (error) {console.log(error)}
  }

  useEffect(() => {
      fetchDataProfesionales()
  },[proid])
	
	if(!stateProfesionales){
		return null;
	}
    const descr = parse(stateProfesionales.descripcion)


/* 
        const mercadoPago =  async (event)  =>{
            event.preventDefault();

            let myHeaders = new Headers();

		        myHeaders.append("Content-Type", "application/json")

		const raw = JSON.stringify({
			title:'Solidar',
			price:montoD
		})

		const options = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		}

		const postData = await fetch("http://localhost:5000/checkout", options)
		const res = postData.json()
		console.log(res)

        }
   */

 




    return (
        <>
         <div class="contenidoDetalles">
        <figure class="portada-solidar-detalles">
                        <img src={stateProfesionales.imgUrl} alt="Portada"/>
                </figure>
        <div class="tabset">
                <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked/>
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
                                <h2>{stateProfesionales.titulo}</h2>
                            </div>
                            <hr/>
                            <div class="descripcion-detalles">
                                <p>
                                   {descr}
                                </p>
                            </div>
                                <div class="card-detalles-donacion">
                                    <br/>
                                    <h5>¿QUIERES AYUDAR?</h5>
                                    
                                        <button class="button">
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
                                        </button>
                                        {/* <form onSubmit={mercadoPago}>
                                        <input onChange={({target}) => setDonacion(target.value)}/>
                                        <button type="submit">ENVIAR</button>
                                        </form> */}
                                        
                                </div>
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
                                                    <textarea class="form-control" id="message" placeholder="Escribir comentario..." required=""></textarea>
                                                </div>
                                            </div>  
                                            <button type="submit" class="btn btn-success pull-right">Enviar</button>	
                                        </fieldset>
                                       
                                    </form>
                
                                            <h3 class="coment-h3">Comentarios</h3>
                                            
                                        
                                            <div class="media">
                                                <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/></a>
                                                <div class="media-body">
                                                    <h4 class="media-heading">John Doe</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    <ul class="list-unstyled list-inline media-detail pull-left">
                                                        <li><i class="fa fa-calendar"></i>27/02/2014</li>
                                                    
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            
                                            <div class="media">
                                                <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/></a>
                                                <div class="media-body">
                                                    <h4 class="media-heading">John Doe</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    <ul class="list-unstyled list-inline media-detail pull-left">
                                                        <li><i class="fa fa-calendar"></i>27/02/2014</li>
                                                    </ul>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    </section>
                    
                </div>
                
                </div>
                <form action="http://localhost:5000/checkout" method="POST">
                                <input type="hidden" name="title" value="Solidar"/>
                                <input type="hidden" name="price" value="2500"/>                                
                                <input type="submit" value="Donar" class="btn btn-primary btn-block"/>
                            </form>
           
                </div>
        </>
    )
}

export default Detalle
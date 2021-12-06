//import animals from '../../assets/slider-01.jpg'
import React,{useEffect, useState} from 'react';
import '../assets/styles/css/detalles/detalles.css'

import { useParams } from 'react-router';

import portadaDetalle from "../assets/styles/images/Solidar/soli2.jpg";




const Detalle = () => {
        
    const {proid} = useParams();
	//console.log(proid + " xdxdxd");

	const [stateProfesionales, setStateProfesionales] = useState(null)
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

    return (
    
        <div class="contenidoDetalles">
            <article>
                <figure class="portada-solidar-detalles">
                        <img src={stateProfesionales.imgUrl} alt="Portada"/>
                </figure>
                    <div class="nav-detalles">
                        <a href="">PUBLICACION</a>
                        <a href="">COMENTARIOS</a>
                    </div>
                    <br/>
                    <div class="container">
                        <div class="container-solidar">
                            <div class="titulo-detalles">
                                <h2>{stateProfesionales.titulo}</h2>
                            </div>
                            <hr/>
                            <div class="descripcion-detalles">
                                <p>
                                    Gracias a los empleados de Clifford Chance más familias en situación de vulnerabilidad ponen su mesa esta navidad
                                    Situación Social
                                    
                                    La crisis social generada por el Covid-19 sigue pegando fuerte y el 27% de los españoles se encuentran en exclusión social (Eurostat). A esto se le suma una subida sin precedentes del IPC dejando los precios un 5.5% más altos que el año pasado. 
                                    
                                    En España, todos lo sabemos, la Navidad es una época de celebración y reencuentros. Aún así, muchas familias siguen con las mismas preocupaciones y precariedad en sus condiciones de vivienda y económicas. Muchas familias no podrán servir un pavo o tomar un vino, ni si quiera podrán tomar alimentos frescos. 
                                    
                                    A + familias: La Asociación
                                    
                                    En A+familias llevamos 2 años ayudando a familias en situación de vulnerabilidad. Apostamos por la cobertura integral de sus necesidades pero con un objetivo claro, que es: la dignidad y autonomía de estas familias. 
                                    
                                    Hemos progresado hacia la dignidad desde la tipología de ayuda entregada: 
                                    Nos iniciamos con la entrega de cestas de la compra. Avanzamos con la entrega de vales/cupones de los supermercados DIA y después tarjetas monedero de los supermercados Carrefour. Actualmente se compaginan las tarjetas virtuales de Carrefour con las tarjetas de débito Visa Social la Caixa con el fin de hacer más digno y sostenible este sistema de ayudas. Las familias que acceden a esta ayuda utilizan la tarjeta para comprar productos de primera necesidad e higiene. El gran logro obtenido, ha sido evitar que estas personas sean parte de las colas del hambre y que puedan ir a la compra y escoger sus alimentos según necesidades, intolerancias .. 
                                    
                                    Durante el año 2021 hemos: 
                                    
                                    Entregado 150.000€ en tarjetas; Una media de 100 familias y 12.000€ entregados al mes
                                    Firmado 10 acuerdos con entidades sociales de ayuda a familias 
                                    Creado 8 vínculos institucionales: Carrefour, La Caixa, Universidad de Comillas, Clifford Chance, Allen & Overy, IE University, Citi Bank, Proyecto Incorpora La Caixa
                                    Más información
                                    
                                    Esta es la ayuda económica mensual según el número de miembros (si hay hijos menores de 3 años se dan 10€ más)
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
                                </div>
                            </div>  
                        </div>
            </article>
        </div>

    )
}

export default Detalle
//import animals from '../../assets/slider-01.jpg'
import React,{useState,useEffect} from 'react';
/* import { Link } from 'react-router-dom'; */
//import { Link } from 'react-router-dom';
import '../assets/styles/css/tarjeta/card.css'

import { Link } from 'react-router-dom';


const Home = () => {

  const [listatadoCompleto, setListadoCompleto] = useState ([])
	const url = "http://localhost:5000/api/get-publicaciones";

  const fetchDataPublicaciones = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
          //console.log(res + 'xd')
          setListadoCompleto(res)
      } catch (error) {console.log(error)}
  }

  useEffect(() => {
    fetchDataPublicaciones()
    
  },[])
	
	if(!listatadoCompleto){
		return null;
	}
        
  

  
  /*   let fecha = new Date(listatadoCompleto.fechaInicio)
    let fechaConvertida = fecha.toLocaleDateString();
 */
    

    
    return (
      <div> 
      <div class="site-containerSolidar">
      <div class="article-containerSolidar">
        { 
      listatadoCompleto.length > 0 ? listatadoCompleto.map(item => { 

        const progress = (item.dineroActual/item.objetivo)*100;
        console.log(progress)
                    return(
          <article class="article-cardSolidar  animate__animated animate__bounceInLeft">
              <figure class="article-imageSolidar">
                  <img src={item.imgUrl} alt="Portada"/>
              </figure>
              <div class="article-contentSolidar">
                  <h5  class="card-categorySolidar">Por: <b>Brito Enzo</b></h5>
                  <h5  class="card-categorySolidar2">De: <b>{item.departamento}</b></h5>
                  <hr class="hrSolidar"/>
                  <h3 class="card-titleSolidar">{item.titulo}</h3>
                  <p class="card-excerpt">{item.descripcion.substring(0,125)}...</p>
                  <hr class="hrSolidar"/>
                  {
                      progress < 100 ? <progress class="card-progressSolidar"id="file" max="100" value={progress}> 70% </progress>
                      : 
                        <div>
                          <h5 class ="h5-finalizado">Finalizado</h5>
                        </div>
                  }
                    {
                        progress < 100 ?
                        <div class="textos">
                          <div class="derecho">
                            <p class="card-objetivoActual">${item.dineroActual}</p>
                          </div>
                          <div class="izquierdo">
                              <p class="card-objetivoFinal">${item.objetivo}</p>
                          </div>        
                    </div>
                    : ""
                    }
                    
                  <Link to ={{pathname:'/detalle/' + item._id}} href="#">Leer Más</Link> 
              </div>
          </article>   
          )
        }): <h1 style={{margin:'auto', color:'black'}}><b>NO SE HAN CARGADO LAS PUBLICACIONES</b></h1>
      }
      
      
      </div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
  </div>
  <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-col">
                        <h4>¿Quienes somos?</h4>
                        <p>Queremos brindar a las personas que necesitan ayuda solidaria la oportunidad de contar sus historias</p>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col middle">
                        <h4>Conoce más de nosotros</h4>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Click para más información <a className="turquoise" href="#your-link">contacto.com</a></div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Leer los <a className="turquoise" href="terms-conditions.html">Terminos & Condiciones</a>, <a className="turquoise" href="privacy-policy.html">Política de privacidad</a></div>
                            </li>
                        </ul>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col last">
                        <h4>Redes Sociales</h4>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-google-plus-g fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 
                </div> 
            </div> 
        </div> 
        <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">©Copyright SOLIDAR Todos los derechos reservados.</p>
                </div> 
            </div> 
        </div> 
    </div> 
    </div>  

</div>  
    )
}

export default Home;

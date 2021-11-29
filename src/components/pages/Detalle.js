//import animals from '../../assets/slider-01.jpg'
import React,{useEffect, useState} from 'react';


import { useParams } from 'react-router';
import portada from '../assets/styles/images/solidaridad.png'





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
        
        <div className="container">
             <br/><br/><br/><br/><br/>
      <section class="section swiper-container swiper-slider swiper-classic bg-gray-2" data-loop="true" data-autoplay="4000" data-simulate-touch="false" data-slide-effect="fade">
            <div class="swiper-wrapper">
                <div class="swiper-slide text-center"><img src= {portada}/>
                    <div class="container">
                        <div class="row justify-content-center">
                            
                        </div>
                    </div>
                </div>
            </div>
            
      </section>


      
        <section class="section section-md bg-gray-100">
            <div class="container">
                <div class="row row-50">
                    <div class="col-lg-8">
                        <div class="main-component">
                            
                            
                            <div class="row row-30">
                                <div class="col-md-12">
                                    
                                    <h5>{stateProfesionales.titulo}</h5>
                                    <br/>
                                    <hr style={{height: "5px", backgroundColor: "rgb(6, 217, 224)"}} />
                                    <p>{stateProfesionales.descripcion}</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        
        
                  
                  
                    <br/>
                    <div class="donaciones col-lg-4 " >
                                
                                <aside class="aside-components">
                                    <div class="aside-component">
                                        <div class="owl-carousel-outer-navigation-1">
                                            
                                            <div class="aside-component" >
                                            
                                                <article class="heading-component" >
                                                    <div class="heading-component-inner">
                                                        <h5 class="heading-component-title" >¿Quieres Ayudar?</h5 >
                                                    </div>
                                                </article>
                                                <a class="button button-xs btn btn-primary" href="#">Donar</a>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                               
                     </div>      
            </div>
        </section>
    </div>
    )
}

export default Detalle
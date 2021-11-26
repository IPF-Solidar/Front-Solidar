//import animals from '../../assets/slider-01.jpg'
import React,{useState,useEffect} from 'react';
//import { Link } from 'react-router-dom';



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
        <div class="container">
  <div class="info">
    <h1>SOLIDAR</h1><span>Ayudemos a todos <i class='fa fa-heart animated infinite pulse'></i> </span>
  </div>
  
  

        {
                listatadoCompleto.length > 0 ? listatadoCompleto.map(item => { 
                    
                    
                    return(

                      <div class="column">
    
    
                      <div class="post-module">
                        
                        <div class="thumbnail">
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                        </div>
                        
                        <div class="post-content">
                          <div class="category">NUEVO</div>
                          <h1 class="title">{item.titulo}</h1>
                          <h2 class="sub_title">{item.descripcion}</h2>
                         {/*  <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p> */}



                         
                         <div id="outer">
                         <div class="button_slide slide_right">Detalles </div>
                         </div>

                            
                          <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-o"></i>
                              6 mins ago</span><span class="comments"><i class="bx bx-street-view"></i>{item.autor.nombre} {item.autor.apellido}</span></div>
                        </div>
                      </div>
                      <br/>
                      <br/>
                    </div>
                   
                  )
                }): <h1 style={{margin:'auto', color:'black'}}><b>NO SE HAN CARGADO LAS PUBLICACIONES</b></h1>
                    
            }    
            
            </div>


            

</div>
    )
}

export default Home;

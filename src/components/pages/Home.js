//import animals from '../../assets/slider-01.jpg'
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import '../assets/styles/css/tarjeta/card.css'


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
<div class="container 2">
<br/><br/><br/><br/><br/><br/>
<div className="row">
  
  <div class="info" style={{textAlign:"center"}}>
    <span>Ayudemos a todos <i class='fa fa-heart animated infinite pulse'></i> </span>
  </div>
  {
    listatadoCompleto.length > 0 ? listatadoCompleto.map(item => { 
                    return(
            <div class="cardcontainer col-md-3 ">
                <div class="photo"> <img src="https://images.pexels.com/photos/2346006/pexels-photo-2346006.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"/>
                    <div class="photos">NUEVO</div>
                </div>
                <div class="content">
                    <p class="txt4">{item.titulo}</p>
                    <p class="txt5">{item.descripcion}</p>
                    {/* <p class="txt2">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p> */}
                </div>
                <div class="footer2">
                    <p><Link to= {{pathname:'/detalle/' + item._id}} class="waves-effect waves-light btn" href="#">DETALLES</Link></p>
                    <p class="txt3"><i class="far fa-clock"></i>10 Minutes Ago <span class="comments"><i class="fas fa-comments"></i>{item.autor.nombre} {item.autor.apellido}</span></p>
                </div>
            </div>
           
            
         )
        }): <h1 style={{margin:'auto', color:'black'}}><b>NO SE HAN CARGADO LAS PUBLICACIONES</b></h1>
            
    }  
    
     </div>
     
<br/>
</div>
        </div>
    )
}

export default Home;

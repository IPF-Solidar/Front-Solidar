//import animals from '../../assets/slider-01.jpg'
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/tarjeta.css'







const Landing = (props) => {
        
    const [listatadoCompleto, setListadoCompleto] = useState ([])

    useEffect(() => {
        //console.log(props + ' Home')
        if(props.location.datos){setListadoCompleto(props.location.datos.profesionales)}
        else{setListadoCompleto([])}
    }, [props])
    
    let fecha = new Date(listatadoCompleto.fechaInicio)
    let fechaConvertida = fecha.toLocaleDateString();

    
    return (
        <div>
        <div class="row row-30">
        {
                listatadoCompleto.length > 0 ? listatadoCompleto.map(item => { 
                    
                    
                    return(

            <div class="col-md-2">
            

                    <article class="post-future"><a class="post-future-figure"><img src="https://urpimedia.com/wp-content/uploads/2019/06/posicionar-tu-ONG-en-Facebook.png" alt="" width="368" height="287"/></a>
                      <div class="post-future-main">
                        <h4 class="post-future-title" ><a href="#">{item.titulo}...</a></h4>
                        <div class="post-future-meta">
                          
                          <div class="badge badge-secondary">{item.autor.nombre} {item.autor.apellido}
                          </div>
                          <div class="post-future-time"><span class="icon mdi mdi-clock"></span>
                            <time datetime="2020">{item.fechaInicio.substring(0,10)}</time>
                          </div>
                        </div>
                        <hr/>
                        <div class="post-future-text">
                          <p>{item.descripcion}...</p>
                        </div>
                        <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div><br/>
                        {/* <div class="post-future-footer group-flex group-flex-xs"><a class="button button-gray-outline" href="#">Detalle</a> */}
                        <div class="post-future-footer group-flex group-flex-xs"><Link class="button button-gray-outline" to= {{pathname:'/detalle/' + item._id}} >Detalle</Link>
                        {/* <Link  to= {{pathname:'/detalle/' + item._id}}
                                                    ><button className="bt btn-success">DETALLE2</button>
                                         </Link> */}
                          <div class="post-future-share">
                            <div class="inline-toggle-parent">
                              <div class="inline-toggle icon material-icons-share"></div>
                              <div class="inline-toggle-element">
                                <ul class="list-inline">
                                  <li>Compartir</li>
                                  <li><a class="icon fa-facebook" href="#"></a></li>
                                  <li><a class="icon fa-twitter" href="#"></a></li>
                                  <li><a class="icon fa-google-plus" href="#"></a></li>
                                  <li><a class="icon fa-instagram" href="#"></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                      
                  </div>
                  )
                }): <h1 style={{margin:'auto', color:'black'}}><b>NO SE HAN CARGADO LAS PUBLICACIONES</b></h1>
                    
            }    
            </div>
        </div>
    )
}

export default Landing;

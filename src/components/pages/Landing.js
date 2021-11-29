
import React,{useState} from 'react';

import { Link } from 'react-router-dom';

import portada from "../assets/styles/images/Solidar/portada6.png" 
import portada2 from "../assets/styles/images/Solidar/portada6.png" 
import portada3 from "../assets/styles/images/Solidar/portada5.png" 
import video from "../assets/styles/images/video-frame.jpg";

const Landing = () => {


    return (
        
        <>
        <body>
        <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1>En tiempos difíciles,<span id="js-rotating"> la solidaridad puede salvarnos</span></h1>
                            <p className="p-large">Ayudemos a las personas!</p>
                            
                            <Link to="/publicaciones" className="btn-solid-lg page-scroll" href="#your-link"><i className="fab fa-google-play"></i>PUBLICACIONES</Link>
                        </div>
                    </div> 
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src={portada} alt="alternative"/>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </header> 
    
 
    


    
    <div id="details" className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img className="img-fluid" src={portada2} alt="alternative"/>
                </div> 
                <div className="col-lg-6">
                    <div className="text-container">
                        <h3>SOLIDAR</h3>
                        <p>No necesitas una razón para ayudar a los demás</p>
                        <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">CONTACTO</a>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
   


    <div className="basic-3">
        <div className="second">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h3>La SOLIDARIDAD no es un acto de caridad, sino una ayuda mutua entre fuerzas que luchan por el mismo objetivo</h3>
                            <p></p>
                            <Link to="/publicaciones" className="btn-solid-reg popup-with-move-anim">DONAR</Link>
                        </div> 
                    </div> 
                    <div className="col-lg-6">
                        <img className="img-fluid" src={portada3} alt="alternative"/>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
     
    <div id="preview" className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>¿Que es la solidaridad?</h2>
                    <div className="p-heading p-large">Target the right customers for your business with the help of Leno's patented segmentation technology</div>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">

                    
                    <div className="image-container">
                        <div className="video-wrapper">
                            <a className="popup-youtube" href="https://www.youtube.com/watch?v=3Dxj-gg2eDk" data-effect="fadeIn">
                                <img className="img-fluid" src={video} alt="alternative"/>
                                <span className="video-play-button">
                                    <span></span>
                                </span>
                            </a>
                        </div> 
                    </div> 
                    

                </div> 
            </div> 
        </div> 
    </div> 

    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-col">
                        <h4>About Leno</h4>
                        <p>We're passionate about creating the best mobile apps for personal development</p>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col middle">
                        <h4>Important Links</h4>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Our business partners <a className="turquoise" href="#your-link">startupguide.com</a></div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Read our <a className="turquoise" href="terms-conditions.html">Terms & Conditions</a>, <a className="turquoise" href="privacy-policy.html">Privacy Policy</a></div>
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
    
    </body>
        </>

    )
}

export default Landing;

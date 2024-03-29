import React from 'react'




const Contact = () => {
    return (
        <>
            <footer class="container-fluid" id="gtco-footer">
  <div class="container">
      <div class="row">
          <div class="col-lg-6" id="contact">
              <h4> CONTACTO </h4>
              <input type="text" class="form-control" placeholder="Nombre Completo"/>
              <input type="email" class="form-control" placeholder="Correo Electronico"/>
              <textarea class="form-control" placeholder="Mensaje"></textarea>
              <a href="#" class="submit-button">ENVIAR <i class="fa fa-angle-right" aria-hidden="true"></i></a>
          </div>
          <div class="col-lg-6">
              <div class="row">
                  <div class="col-6">
                      <h4>DESCUBRE <b>SOLIDAR</b></h4>
                      <ul class="nav flex-column company-nav">
                          <li class="nav-item"><a class="nav-link" href="#">Quienes somos</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Que te ofrecemos</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Preguntas Frecuentes</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Ayuda</a></li>
                      </ul>
                      <h4 class="mt-5">TE ESPERAMOS EN LAS REDES</h4>
                      <ul class="nav follow-us-nav">
                          <li class="nav-item"><a class="nav-link pl-0" href="#"><i class="fa fa-facebook"
                                                                                    aria-hidden="true"></i></a></li>
                          <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-twitter"
                                                                               aria-hidden="true"></i></a></li>
                          <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-google"
                                                                               aria-hidden="true"></i></a></li>
                          <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-linkedin"
                                                                               aria-hidden="true"></i></a></li>
                      </ul>
                  </div>
                  <div class="col-6">
                      <h4><b>SOLIDAR</b></h4>
                      <ul class="nav flex-column services-nav">
                        <li class="nav-item"><a class="nav-link" href="#">Dona</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Cuenta tu historia</a></li>
                        {/* <li class="nav-item"><a class="nav-link" href="#">Web Design</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Graphics Design</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">App Design</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">SEO</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Marketing</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Analytic</a></li> */}     
                      </ul>
                  </div>
                  <div class="col-12">
                      <p>©Copyright SOLIDAR Todos los derechos reservados.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</footer>
        </>
    )
}

export default Contact

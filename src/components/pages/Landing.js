
import React,{useState} from 'react';



import banner from '../assets/images/banner-img.png'
import Learn from '../assets/images/learn-img.jpg'

import { Link } from 'react-router-dom';

const Landing = () => {


    return (
        
    <>
     <div class="container-fluid gtco-banner-area">
  <div class="container">
      <div class="row">
          <div class="col-md-6">
              <h1> La <span>solidaridad</span> no es un acto de caridad, sino una ayuda mutua entre fuerzas que luchan por el mismo objetivo  </h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl. </p>
              
              {/* <Link to = "/publicaciones">Publicaciones <i class="fa fa-angle-right" aria-hidden="true"></i></Link> */}
              <Link to="/publicaciones">Publicaciones<i class="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
              </div>
          <div class="col-md-6">
              <div class="card"><img class="card-img-top img-fluid" src={banner}alt=""/></div>
          </div>
      </div>
  </div>
</div>
<div class="container-fluid gtco-feature" id="services">
  <div class="container">
      <div class="row">
          <div class="col-md-7">
              <div class="cover">
                  <div class="card">
                      <svg
                              class="back-bg"
                              width="100%" viewBox="0 0 900 700" style={{position:"absolute", zIndex: "-1"}}>
                          <defs>
                              <linearGradient id="PSgrad_01" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                                  <stop offset="0%" stop-color="rgb(1,230,248)" stop-opacity="1"/>
                                  <stop offset="100%" stop-color="rgb(29,62,222)" stop-opacity="1"/>
                              </linearGradient>
                          </defs>
                          <path fill-rule="evenodd" opacity="0.102" fill="url(#PSgrad_01)"
                                d="M616.656,2.494 L89.351,98.948 C19.867,111.658 -16.508,176.639 7.408,240.130 L122.755,546.348 C141.761,596.806 203.597,623.407 259.843,609.597 L697.535,502.126 C748.221,489.680 783.967,441.432 777.751,392.742 L739.837,95.775 C732.096,35.145 677.715,-8.675 616.656,2.494 Z"/>
                      </svg>
                      

                      <svg width="100%" viewBox="0 0 700 500">
                          <clipPath id="clip-path">
                              <path d="M89.479,0.180 L512.635,25.932 C568.395,29.326 603.115,76.927 590.357,129.078 L528.827,380.603 C518.688,422.048 472.661,448.814 427.190,443.300 L73.350,400.391 C32.374,395.422 -0.267,360.907 -0.002,322.064 L1.609,85.154 C1.938,36.786 40.481,-2.801 89.479,0.180 Z"></path>
                          </clipPath>
                          
                          <image clip-path="url(#clip-path)" xlinkHref={Learn} width="100%"
                                 height="465" class="svg__image"></image>
                      </svg>
                  </div>
              </div>
          </div>
          <div class="col-md-5">
              <h2> En tiempos difíciles, la solidaridad puede salvarnos  </h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl, vitae dictum mi
                  semper convallis. Ut sapien leo, varius ac dapibus a, cursus quis ante. </p>
              <p>
                  <small>Nunc sodales lobortis arcu, sit amet venenatis erat placerat a. Donec lacinia magna nulla,
                      cursus impediet augue egestas id. Suspendisse dolor lectus, pellentesque quis tincidunt ac,
                      dictum id neque.
                  </small>
              </p>
              <Link to = "/contact">Contacto<i class="fa fa-angle-right" aria-hidden="true"></i></Link>
              </div>
              
      </div>
  </div>
</div>
{/* <div class="container-fluid gtco-features" id="about">
  <div class="container">
      <div class="row">
          <div class="col-lg-4">
              <h2> Explore The Services<br/>
                  We Offer For You </h2>
              <p> Nunc sodales lobortis arcu, sit amet venenatis erat placerat a. Donec lacinia magna nulla, cursus
                  impediet augue egestas id. Suspendisse dolor lectus, pellentesque quis tincidunt ac, dictum id
                  neque. </p>
              <a href="#">All Services <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
          <div class="col-lg-8">
              <svg id="bg-services"
                   width="100%"
                   viewBox="0 0 1000 800">
                  <defs>
                      <linearGradient id="PSgrad_02" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                          <stop offset="0%" stop-color="rgb(1,230,248)" stop-opacity="1"/>
                          <stop offset="100%" stop-color="rgb(29,62,222)" stop-opacity="1"/>
                      </linearGradient>
                  </defs>
                  <path fill-rule="evenodd" opacity="0.102" fill="url(#PSgrad_02)"
                        d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z"/>
              </svg>
              <div class="row">
                  <div class="col">
                      <div class="card text-center">
                          <div class="oval"><img class="card-img-top" src={web} alt=""/></div>
                          <div class="card-body">
                              <h3 class="card-title">Difunde</h3>
                              <p class="card-text">Comparte en tus redes sociales o en Whatsapp tu donación o tu grupo</p>
                          </div>
                      </div>
                      <div class="card text-center">
                          <div class="oval"><img class="card-img-top" src={marketing} alt=""/></div>
                          <div class="card-body">
                          <h3 class="card-title">Ayuda</h3>
                              <p class="card-text">Dona a las causas disponibles o crea un grupo de ayuda</p>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card text-center">
                          <div class="oval"><img class="card-img-top" src={seo} alt=""/></div>
                          <div class="card-body">
                              <h3 class="card-title">SEO</h3>
                              <p class="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                  eget.</p>
                          </div>
                      </div>
                      <div class="card text-center">
                          <div class="oval"><img class="card-img-top" src={graphics} alt=""/></div>
                          <div class="card-body">
                              <h3 class="card-title">Graphics Design</h3>
                              <p class="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                  eget.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div> */}


    </>

    )
}

export default Landing;
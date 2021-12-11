import React, {useState,useEffect} from 'react'
import '../assets/styles/css/metodosPagos/mPagos.css'
import QRCode from "react-qr-code";
import { useParams } from 'react-router';

const Pagos = () => {






	const [stateProfesionales, setStateProfesionales] = useState(null);
    const {proid} = useParams();
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
        <div class="container-solidaPagos">
            <div id="tsum-tabs">
  
                <h1>Metodos De Pagos</h1>
                <main>
                
                <input id="tab1" type="radio" name="tabs" />
                <label for="tab1">Mercado Pago</label>
                    
                <input id="tab2" type="radio" name="tabs"/>
                <label for="tab2">Criptomonedas</label>
                    
                <input id="tab3" type="radio" name="tabs"/>
                <label for="tab3">Personal</label>
                    
               {/*  <input id="tab4" type="radio" name="tabs"/>
                <label for="tab4">Drupal</label> */}
               
                <section id="content1">
                {
                    stateProfesionales.mpMercadoPago ?
                    <form action="http://localhost:5000/checkout" method="POST" /* target="_blank" */>
                                <img style={{width:'50%',position:'relative', left:'170px'}}src='https://hvghobbies.com/wp-content/uploads/2019/07/mercadopago-01-e1562863464953.png?w=640'/>
                                <br/><br/>
                                <h2 style={{textAlign:'center', color:'cyan'}}>Ingresar el monto que desea donar</h2>
                                <h4 style={{fontFamily:'arial', textAlign:'center'}}>{stateProfesionales.titulo}</h4>
                                <input type="hidden" name="title" value={stateProfesionales.titulo}/> 
                             
                                <input type="number"  name="price"  placeholder='Ingresar valor'/>
                                
                                <br/>    <br/>    <br/>                      
                                <input type="submit" value="Donar"  class="btn btn-success btn-block"/>
                </form>
                :<h3 style={{textAlign:'center'}}><i class="bx bxs-message-square-error"></i> No puedes donar con este metodo</h3>
                }
                </section>
                    
                <section id="content2">
                    {/* <img style={{width:'50%',position:'relative', left:'170px'}} src="http://webtilia-hostd1.com/img/Mant.png"/> */}
                    {
                        stateProfesionales.mpCriptomonedas ?
                        <div>
                        <h3 style={{textAlign:'center', color:'cyan'}}>Escanearlo con <b style={{color:'yellow'}}>BINANCE</b></h3>
                    <a href='https://www.binance.com/es' target="_blank"><img style={{width:'10%',position:'relative', left:'310px'}}src='https://logodownload.org/wp-content/uploads/2021/03/binance-logo-1.png'/></a>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{width:'50%',position:'relative', left:'220px'}}>
                        <QRCode value={stateProfesionales.mpCriptomonedas} />
                    </div>
                    </div>
                    :<h3 style={{textAlign:'center'}}><i class="bx bxs-message-square-error"></i>No puedes donar con este metodo</h3>
                    }
                </section>
                
                <section id="content3">
                <h2 style={{fontFamily:'arial', textAlign:'center'}}>Contacto Personal</h2>
                <br/>
                {
                    stateProfesionales.numeroContacto ?
                    <h4 style={{color:'cyan'}}><i class="bx bxs-phone"></i> Telefono: <b style={{color:'white'}}> {stateProfesionales.numeroContacto}</b></h4>
                : ""
                }
                <br/>
                {
                    stateProfesionales.cvu ?
                    <h4 style={{color:'cyan'}}><i class="fas fa-id-card"></i> CVU:<b style={{color:'white'}}> {stateProfesionales.cvu}</b></h4>
                    : ""
                }
                <br/>
                {
                    stateProfesionales.emailC ?
                    <h4 style={{color:'cyan'}}><i class="far fa-envelope"></i> Email: <b style={{color:'white'}}> enzoexequielbrito11@gmail.com</b></h4>
                    : ""
                }
                </section>
                    
                {/* <section id="content4">
                <img style={{width:'50%',position:'relative', left:'170px'}} src="https://lh3.googleusercontent.com/proxy/nSIGCbxvBv2ztSaDnblxsxr-KtFZ74mzwvJtLKrsFiswZcYZ9PdQQOv-Ubz99iBYhPGShg5s5HiFWGLcAVa29BjuHZCML_rCuuZhxXh2MCFWgg"/>
                </section> */}
                    
                </main>
          </div>
        </div>
    )
}

export default Pagos

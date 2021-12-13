
import React, {useState,useEffect,useRef} from 'react'
import '../assets/styles/css/formPublicar/formulariop.css'
import { useHistory } from 'react-router'
import axios from 'axios'
import logo from '../assets/styles/images/Solidar/escudo.png'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../assets/styles/css/metodoPagos/checkbox.css'
import { Toaster,toast } from 'react-hot-toast'
import mp from '../assets/styles/images/Solidar/zyro-image.png'
import cm from '../assets/styles/images/Solidar/crip.png'
import sinFoto from '../assets/styles/images/Solidar/imagenNodisponible.jpg'
const FormPublicar = () => {

  
    
    const inputFileRef= useRef()




    const history= useHistory()

	const [titulo, setTitulo] = useState('');
/* 	const [descripcion, setDescripcion] = useState(''); */
  const [departamento, setDepartamento] = useState('');
	const [objetivo, setObjetivo] = useState('');
	const [nContacto, setNcontacto] = useState(null);
	const [fechaFinal, setFechaFinal] = useState('');
  const [descripcionEditor, setDescripcionEditor] = useState('');
  const [cvuP, setCvu] = useState('');
  const [emailC, setEmailC] = useState('');
  const [mpMercadoPago, setMPMercadoPago] = useState(false); 
  const [mpCriptomonedas, setMPCriptomonedas] = useState(false);
  const [mpURLCripto, setMpURLCripto] = useState('') 
  const [mpURLMercadoPago, setMpURLMercadoPago] = useState('') 
  const [imagenUrl, setImage] = useState(sinFoto);
  const handleChange = (e, editor) =>{
    setDescripcionEditor(editor.getData());
  }



	const [registrado, setRegistrado] = useState(null)

	useEffect(() => {
		if(registrado){
			history.push('/publicaciones')
		}
	}, [registrado])

  const url = "http://localhost:5000/api/create-publicacion";

  const Datos = localStorage.getItem('Solidar-Usuario');
  const parse = JSON.parse(Datos);
  const token = parse.token;
/*   console.log(token) */

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imagen = inputFileRef.current.files[0]
    console.log(imagen)
    const formData = new FormData();
    formData.append('titulo', titulo)
    formData.append('descripcion', descripcionEditor)
    formData.append('departamento', departamento)
    formData.append('image', imagen)
    formData.append('objetivo', objetivo)
    formData.append('numeroContacto', nContacto)
    formData.append('cvu', cvuP)
    formData.append('emailC', emailC)
    formData.append('mpCriptomonedas', mpURLCripto)
    formData.append('mpMercadoPago', mpURLMercadoPago)
    formData.append('fechaFinal', fechaFinal)

    await axios.post(url, formData, {
      headers:{
        'x-token': token,
        'Content-Type': 'multipart/form-data'
      }
    })
    setRegistrado(true);
    mensajePrueba();
  }





  const mensajePrueba = () =>{
    toast.success('Se Guardo Correctamente',{
      position:"top-right",
      reverseOrder:"false"
    })
  }
    const cambiarEstado = (val) => setMPMercadoPago(val);
    const cambiarEstado2 = (val2) => setMPCriptomonedas(val2);
  

    const subirImagen = (e) =>{
      const fileImagen = e.target.files[0]
      
      const urlImagen = URL.createObjectURL(fileImagen);
      setImage(urlImagen)
    }

    return (
      <div class="container rounded bg-white mt-5 mb-5">
        <form onSubmit={handleSubmit}>
      <div class="row">
      <Toaster/>
      
          <div class="col-md-3 border-right">
            
              <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={imagenUrl}/> <br/>
              <span class="font-weight-bold" style={{color:'black'}}>SUBIR FOTO DE PORTADA</span>
              <br/>
              <div class="custom-input-file col-md-6 col-sm-6 col-xs-6">
                      <input class="input-file" type="file" ref={inputFileRef} onChange={subirImagen}/>
                      Cargar Portada...
                      
              </div>
                    
              </div>
          </div>
          <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4 class="text-right" style={{color:'black'}}>Crear Una Historia</h4>
                  </div>
                  <div class="row mt-2">
                      <div class="col-md-6"><label class="labels">Titulo De La Publicacion</label><input type="text" class="form-control" placeholder="Titulo" onChange={({target}) => setTitulo(target.value)}  /></div>
                      <div class="col-md-6"><label class="labels">Departamento</label><select name="select" class="form-control" onChange={({target}) => setDepartamento(target.value)} Required>
                            <option selected disabled value="Formosa (capital)">Seleccionar</option>
                            <option value="Formosa (capital)">Formosa (capital)</option>
                            <option value="Bermejo" >Bermejo</option>
                            <option value="Laishí">Laishí</option>
                            <option value="Matacos">Matacos</option>
                            <option value="Patiño">Patiño</option>
                            <option value="Pilagás">Pilagás</option>
                            <option value="Pilcomayo">Pilcomayo</option>
                            <option value="Pirané">Pirané</option>
                            <option value="Ramón Lista">Ramón Lista</option>
                          </select></div>
                  </div>
                  <div class="row mt-3">
                      
                      <div class="col-md-12"><label class="labels">Objetivo</label><input type="text" class="form-control" placeholder="Ingresar Un objetivo en $ARG" onChange={({target}) => setObjetivo(target.value)} Required/></div>
                      <div class="col-md-12"><label class="labels">Fecha Que Finaliza Su Historia</label><input type="date"  class="form-control" name="message" id="message" cols="30" rows="7"onChange={({target}) => setFechaFinal(target.value)} Required/></div>
                    </div>
                      <br/>
                      <div class="row mt-3">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <h4 class="text-right" style={{color:'black'}}>CONTACTO</h4>
                        </div>
                      <br/>
                      <div class="col-md-12"><label class="labels">Número De Contacto</label><input type="text" class="form-control" placeholder="Ingresar Nro Contacto (Opcional) " onChange={({target}) => setNcontacto(target.value)}/></div>
                      <div class="col-md-12"><label class="labels">Correo Electronico</label><input type="text" class="form-control" placeholder="Ingresa un Correo Electronico (Opcional)" onChange={({target}) => setEmailC(target.value)}/></div>
                      <div class="col-md-12"><label class="labels">CVU</label><input type="text" class="form-control" placeholder="Ingresa tu CVU para recribir los cobros (Opcional)" onChange={({target}) => setCvu(target.value)}/></div>
                      </div>
                  <div class="row mt-3">
                    
                  <div class="row">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                          <h4 class="text-right" style={{color:'black'}}>METODOS DE COBRO</h4>
                        </div>
                      <br/>
                          <div class="col-md-6 form-group">
                              <div class="grid">
                                    <label class="card">
                                        <input class="card__input" type="checkbox" onClick={() => cambiarEstado(!mpMercadoPago)} required />
                                        <div class="card__body">
                                          <div class="card__body-cover"><img class="card__body-cover-image" src={mp}/><span class="card__body-cover-checkbox"> 
                                                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span>
                                            </div>
                                            <header class="card__body-header">
                                              <h5 class="card__body-header-title">MERCADO PAGO</h5>
                                              <p class="card__body-header-subtitle">metodo de cobro</p>
                                            </header>
                                        </div>
                                    </label>
                                    
                                </div>
                          </div>
                      
                        <div class="col-md-6 form-group">
                        <div class="col-md-6 form-group">
                              <div class="grid">
                                    <label class="card">
                                        <input class="card__input" type="checkbox" onClick={() => cambiarEstado2(!mpCriptomonedas)}/>
                                        <div class="card__body">
                                          <div class="card__body-cover"><img class="card__body-cover-image" src={cm}/><span class="card__body-cover-checkbox"> 
                                                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span>
                                            </div>
                                            <header class="card__body-header">
                                              <h5 class="card__body-header-title">CRIPTOMONEDAS</h5>
                                              <p class="card__body-header-subtitle">metodo de cobro</p>
                                            </header>
                                        </div>
                                    </label>
                                </div>
                          </div>
                        </div>
                    </div>
                    <div class="row">
                    
                      {
                        mpMercadoPago ?
                        <div class="col-md-6 form-group">
                        <input type="text" class="form-control" name="fname" id="fname" placeholder="Ingresar MercadoPago" onChange={({target}) => setMpURLMercadoPago(target.value)}/>
                        <a  href='https://cryptoshitcompra.com/tutorial-como-encontrar-la-direccion-de-su-billetera-wallet-en-binance' style={{color:'black'}} target="_blank">¿Que es wallet?</a>
                      </div>
                      : ""
                      }
                      
                      {
                        mpCriptomonedas ?
                        <div class="col-md-6 form-group">
                      <input type="text" class="form-control" name="fname" id="fname" placeholder="Ingresar tu wallet" onChange={({target}) => setMpURLCripto(target.value)}/>
                      <a  href='https://cryptoshitcompra.com/tutorial-como-encontrar-la-direccion-de-su-billetera-wallet-en-binance' style={{color:'black'}} target="_blank">¿Que es wallet?</a>
                      </div>
                      :""
                      }
                    </div>
                  </div>
                  <div>
                      <div class="p-editor" >
                      <label>Ingresar la descripcion de su proyecto</label>
                        {/* <textarea class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Ingresar una descripcion " onChange={({target}) => setDescripcion(target.value)}></textarea> */}
                        <CKEditor editor={ClassicEditor} onChange={(e,editor) =>{ handleChange(e,editor)}}/>
                      </div>
                    </div>
                  <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit">PUBLICAR</button></div>
              </div>
          </div>
          
          <div class="col-md-4">
              <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                  <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" /></div> <br/>
                  <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" /></div>
              </div>
          </div>
         
      </div>
      </form>
  </div>
 
    )
}

export default FormPublicar

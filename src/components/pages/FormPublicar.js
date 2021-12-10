
import React, {useState,useEffect,useRef} from 'react'
import '../assets/styles/css/formPublicar/formulariop.css'
import { useHistory } from 'react-router'
import axios from 'axios'
import logo from '../assets/styles/images/Solidar/escudo.png'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Toaster,toast } from 'react-hot-toast'

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

    const formData = new FormData();
    formData.append('titulo', titulo)
    formData.append('descripcion', descripcionEditor)
    formData.append('departamento', departamento)
    formData.append('image', imagen)
    formData.append('objetivo', objetivo)
    formData.append('numeroContacto', nContacto)
    formData.append('cvu', cvuP)
    formData.append('emailC', emailC)
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

  

    return (
        <div class="content-form-solidar">
           
        <div class="container">
    
          
          <div class="row justify-content-center">
            <div class="col-md-10">
              
              <div class="row align-items-center">
                <div class="col-lg-7 mb-5 mb-lg-0">
    
                  <h2 class="h2 mb-5 animate__animated animate__fadeInTopLeft">FORMULARIO</h2>
                   
                  <form class="border-right pr-5 mb-5" method="post" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="text" class="form-control" name="fname" id="fname" placeholder="Titulo de La publicacion" onChange={({target}) => setTitulo(target.value)}/>
                      </div>
                      
                      <div class="col-md-6 form-group">
                        <select name="select" class="form-control-select" onChange={({target}) => setDepartamento(target.value)}>
                            <option selected disabled value="Formosa (capital)">Seleccionar Departamento</option>
                            <option value="Formosa (capital)">Formosa (capital)</option>
                            <option value="Bermejo" >Bermejo</option>
                            <option value="Laishí">Laishí</option>
                            <option value="Matacos">Matacos</option>
                            <option value="Patiño">Patiño</option>
                            <option value="Pilagás">Pilagás</option>
                            <option value="Pilcomayo">Pilcomayo</option>
                            <option value="Pirané">Pirané</option>
                            <option value="Ramón Lista">Ramón Lista</option>
                          </select>
                      </div>
                    </div>
                   
                    <br/>
                    <div class="row">
                        <div class="col-md-12 form-group">
                          <input type="text" class="form-control" name="message" id="message" cols="30" rows="7" placeholder="$ Objetivo (Pesos Arg)" onChange={({target}) => setObjetivo(target.value)}/>
                        </div>
                      </div>
                      <br/>
                      <div class="row">
                        <div class="col-md-12 form-group">
                          <label>Fecha que finalizara la publicacion</label>
                          <input type="date"  class="form-control" name="message" id="message" cols="30" rows="7"onChange={({target}) => setFechaFinal(target.value)}/>
                        </div>
                      </div>
                      <br/>
                      <h5 style={{textAlign:'center'}}>CONTACTO</h5>
                      <br/>
                    <div class="row">
                        <div class="col-md-12 form-group">
                          <input type="number" class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Número de contacto (opcional)" onChange={({target}) => setNcontacto(target.value)}/>
                        </div>
                      </div>
                      <br/>
                      <div class="row">
                        <div class="col-md-12 form-group">
                          <input type="text" class="form-control" name="message" id="message" cols="30" rows="7" placeholder="CVU (opcional)" onChange={({target}) => setCvu(target.value)}/>
                        </div>
                      </div>
                      <br/>
                      <div class="row">
                        <div class="col-md-12 form-group">
                          <input type="email" class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Correo Electronico (opcional)" onChange={({target}) => setEmailC(target.value)}/>
                        </div>
                      </div>
                      <br/>
                      <h5 style={{textAlign:'center'}}>DETALLES</h5>
                      <br/>
                      <div>
                      <div >
                      <label>Ingresar la descripcion de su proyecto</label>
                        {/* <textarea class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Ingresar una descripcion " onChange={({target}) => setDescripcion(target.value)}></textarea> */}
                        <CKEditor editor={ClassicEditor} onChange={(e,editor) =>{ handleChange(e,editor)}}/>
                      </div>
                    </div>
                    <div class="row-button-solidar">
                      <div class="col-md-12">
                        <input type="submit" value="PUBLICAR"  class="btn btn-success rounded-0 py-2 px-4"/>
                        <span class="submitting"></span>
                      </div>
                    </div>
                    
                  </form>
    
                </div>
                <div class="col-lg-4 ml-auto">
                    <figure>
                        <img class="logo-form" src={logo}/>
                    </figure>
                  <h3 class="h3 mb-4">SUBIR IMAGEN</h3>
                  <p class="p-detalle ">Debes agregar una buena portada a tu publicacion</p>
                  <div class="row">
                    <div class="custom-input-file col-md-6 col-sm-6 col-xs-6">
                      <input class="input-file" type="file" ref={inputFileRef} />
                      Cargar Portada...
                    </div>
                  </div> 
                </div>
              </div>
            </div>  
            </div>
          </div> 
          <Toaster/>
      </div>
    )
}

export default FormPublicar

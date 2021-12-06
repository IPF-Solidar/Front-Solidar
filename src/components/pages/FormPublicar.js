import { render } from '@testing-library/react'
import React, {useState,useEffect,useRef} from 'react'
import '../assets/styles/css/formPublicar/formulariop.css'
import { useHistory } from 'react-router'
import logo from '../assets/styles/images/Solidar/escudo.png'


const FormPublicar = () => {


    /* const renderMiniatura = () => {
        return( 
            <div class="row">
            <div class="custom2-input-file col-md-6 col-sm-6 col-xs-6">
            <input type="file" id="fichero-tarifas" class="input-file" value=""/>
            Subir Miniatura Del Video
            </div>
        </div>
        )
        
    } */
    const renderImagen = () => {
        return( 
            <>
            </>
        )
        
    }

  
    
    const inputFileRef= useRef()
/* 
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputFileRef.current.files[0])
    } */



    const history= useHistory()

	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [departamento, setDepartamento] = useState('');
	const [objetivo, setObjetivo] = useState('');
	const [urlYoutube, setUrlYoutube] = useState(null);
	const [fechaFinal, setFechaFinal] = useState('');


/* 	const inputFileRef= useRef();
useEffect(() =>{
  console.log(inputFileRef)
},[imagen]) */

	const [registrado, setRegistrado] = useState(null)


	const handleSubmit = async (e) => {
    e.preventDefault();
    const portad = inputFileRef.current.files[0].name
    const formData = new FormData()
    formData.append('image', portad)
    
 

    console.log(portad)
		let myHeaders = new Headers();

		myHeaders.append("Content-Type", "application/json")

		const raw = JSON.stringify({
			titulo: titulo,
      descripcion: descripcion,
      departamento:departamento,
      image: formData,
      objetivo: objetivo,
      urlYoutube: urlYoutube,
      fechaFinal: fechaFinal
		})

		const options = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		}

		const postData = await fetch("http://localhost:5000/api/create-publicacion", options)
		const res = postData.json()
		console.log(res)
		setRegistrado(true)
	}

	useEffect(() => {
		if(registrado){
			history.push('/publicaciones')
		}
	}, [registrado])




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
                        <textarea class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Ingresar una descripcion " onChange={({target}) => setDescripcion(target.value)}></textarea>
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
                    <div class="row">
                        <div class="col-md-12 form-group">
                          <input type="text"  class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Ingresar link de un video (opcional)" onChange={({target}) => setUrlYoutube(target.value)}/>
                        </div>
                      </div>
                      <br/>
                          {/*   {
                                video ? renderMiniatura()
                                : ""
                            }
                        <br/> */}
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
                  <p>Debes agregar una buena portada a tu publicacion</p>
                  <div class="row">
                    <div class="custom-input-file col-md-6 col-sm-6 col-xs-6">
                      <input type="file" ref={inputFileRef} />
                      Cargar Portada...
                    </div>
                  </div>
                  {/* {
                      imagen ? <p class="animate__animated animate__heartBeat">Subiendo foto...</p>
                      :renderImagen()
                  } */}
                </div>
              </div>
            </div>  
            </div>
          </div>
      </div>
    )
}

export default FormPublicar

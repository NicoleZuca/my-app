import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos, //los ... es para crear una copia con datos nuevos y no perder los que ya tenemos
            [event.target.name] : event.target.value //agarra el valor del input, lo relaciona con el dato declarado dentro de const [datos, setDatos] y pasa el valor que viene desde la consola
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault(); //evitar procesamiento automático de formularios, lo usamos para que al presionar el botón no lo haga automáticamente con el método get sin preguntar nada
        console.log(datos.nombre + ' ' + datos.apellido)
    }

    return ( 
        <Fragment>
          <h1>Formulario</h1>
          <form className="row" onSubmit={enviarDatos}>
              <div className="col-md-3">
                <input
                    placeholder="Ingrese Nombre"
                    className="form-control"
                    type="text"
                    name="nombre"
                    onChange={handleInputChange} //este elemento va a estar pendiente de este input y va a hacer reaccionar cualquier función que nosotros creemos y va a reaccionar a través de un evento que es el que está en la función handleInputChange
                    ></input>                   
              </div>
              <div className="col-md-3">
                <input
                    placeholder="Ingrese Apellido"
                    className="form-control"
                    type="text"
                    name="apellido"
                    onChange={handleInputChange}
                ></input>
              </div>
              <div className="col-md-3">
                <button className="btn btn-primary" type="submit">Enviar</button>
              </div>
          </form>
          <h3>{datos.nombre} - {datos.apellido}</h3> {/*solo para mostralo en la pantalla*/}
        </Fragment>
    );
}
 
export default Formulario

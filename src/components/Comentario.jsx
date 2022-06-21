import React, { Fragment } from 'react'

import Avatar from './avatar';

const Comentario = ({sujeto}) => {  {/*se coloca el nombre de la variable que estamos recibiendo en app.js*/}
    return (  
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
        <div className="media">
            {/* <img src={sujeto.urlImagen} alt="" className="mr-3"></img> */}
            <Avatar urlImagen={sujeto.urlImagen} />
            <div className="media-body">
                <h5 className="mt-0">{sujeto.nombre}</h5>
                {sujeto.texto}
            </div>
        </div>
        </Fragment>
    );
}
 
export default Comentario;
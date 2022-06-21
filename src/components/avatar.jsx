import React, { Fragment } from 'react'

//Este componente lo que hace es obtener una url con la imagen y retornarla al componente comentario (subcomponente)
const Avatar = ({urlImagen}) => { 
    return (  
        <Fragment>
            <img src={urlImagen} alt="" className="mr-3"></img>
        </Fragment>
    );
}
 
export default Avatar;
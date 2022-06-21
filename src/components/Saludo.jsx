import React, { Fragment } from 'react'

const Saludo = (props) => {
    console.log(props)

    return (  
        <Fragment>
            <h2>Hola! {props.persona} </h2> 
        </Fragment> //los props reciben las variables y las muestra en consola
    );
}
 
export default Saludo;
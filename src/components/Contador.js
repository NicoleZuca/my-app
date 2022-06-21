import React, {useState, Fragment}  from 'react'; {/*el useState se debe importar cuando vamos a utilizar hooks (estados = información que vamos a manipular)*/}

const Contador = () => {

    const [numero, setNumero] = useState(0); {/*entre los [] va el nombre del estado el set es para poder modificar la constante numero
dentro del useState se inicializa la constante*/}

    {/*creación de un método*/}
    const aumentar = () => {
        console.log('me diste un click') 
        setNumero(numero + 1);
    }

    return (  //es lo que vamos a devolver a nuestra vista (html)
        <Fragment>
            <h3>Mi primer componente {numero}</h3> 
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    ); {/*entre corchetes se pone la variable que queremos que se lea y que viene desde JavaScript, el Fragment se utiliza en lugar del div
y es para evitar que aparezcan elementos en html que no se están utilizando*/}
}
 
export default Contador;
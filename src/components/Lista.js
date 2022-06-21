import { click } from '@testing-library/user-event/dist/click';
import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5])

    const [numero, setNumero] = useState(5) //entre () indicamos el número desde el que queremos que empiece a aumentar

    const agregarElemento = () => {
        setNumero(numero + 1)
        //console.log('click') 
        setArrayNumero([
            ...arrayNumero, //al hacer click en el botón va a agarrar el arrayNumero y lo va a concatenar con el nuevo elemento en este caso la variable numero
            numero
        ]) 
    }

    return (
        <Fragment>
          <h2>Lista</h2>
          <button onClick={agregarElemento}>Agregar</button>
          {
              arrayNumero.map((item, index) =>  //El .map es para recorrer el arrayNumero (eso es JS) y entre () se pasa la variable (item que son los numeros que declaramos)
                <p key={index}>{item} - {index}</p>       //y con una funcion de flecha va a ir retornando lo que queramos, el index es una key el cual va a ser el indice 
              )                                 //que va a tomar cada uno de los argumentos y siempre comienzan en 0
          }
        </Fragment>
    );
}

export default Lista;
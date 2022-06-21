import React, {Fragment} from 'react'

const Jsx = () => {

    //const saludo = 'Hola JSX'
    const temperatura = 21;

    return (
        <Fragment> 
            <h2> ¿Frío o calor?</h2>
            <h4>
                {
                    temperatura > 20 ? 'Calor' : 'Frio' //si la temperatura es mayor a 20 entonces me muestra calor sino me muestra frio
                }
            </h4>
        </Fragment>
    );
}

export default Jsx;
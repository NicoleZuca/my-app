import React from 'react';
//import Jsx from './components/Jsx';
//import Lista from './components/Lista';
//import Formulario from './components/Formulario';
//import FormHook from './components/FormHook';
//import EjemploUno from './components/EjemploUno';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

//import Contador from './components/Contador'; {/*Importar el componente contador*/}

 {/*function App() {
  return (
   <div>
  <h1>Hola JSX</h1>*
    <Contador/> //Etiqueta html con el nombre que estamos importando, lo que hace es mostrar lo que hay en el componente contador
      <Jsx/>
<Lista/>
   <div/>

  );
}*
export default App;*/}

{/* function App() {
  return (  
    <div className="container mt-5">
      <Formulario/>
    </div>
);
}
 
export default App;*/}

{/*function App() {
  return (
   <div className="container mt-2">
      <FormHook/>
      <EjemploUno/>
  </div>
  );
}
export default App;*/}

function App(){

  const sujeto = {
    nombre: "Pedrito",
    urlImagen: "https://via.placeholder.com/64",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }

  return ( 
    <div className="container mt-2">
      <h1>Components</h1>
      <Saludo persona="Juanito" /> 
      <Saludo persona="Ignacio" />
      <Saludo persona="Catalina" />
      <Comentario sujeto={sujeto}/>
    </div> 
  );
}
export default App;


import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
   // e.target.reset() //para limpiar los inputs
  };

  return (
    <Fragment>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" autoComplete="off"
          name="titulo"
          placeholder="Ingrese título"
          {...register("titulo", { //el register es para validar cada uno de los inputs que tenemos en el formulario
            required: { //validaciones
              value: true,  //si no cumple con los requerimientos va a mostrar errores
              message: "Título obligatorio"
            },            
          })}
        />

        <span className="text-danger text-small d-block mb-2"> {/*mostrar errores*/}
            {errors?.titulo?.message} {/*si existe un error en titulo entonces muestra el mensaje de error*/}
        </span>

        <button className="btn btn-primary">Enviar</button>
      </form>
    </Fragment>
  );
};

export default FormHook;

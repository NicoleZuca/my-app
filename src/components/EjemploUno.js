import React, { Fragment, useState } from "react";

import { useForm } from "react-hook-form";

const EjemploUno = () => {

  const {register, handleSubmit, formState: { errors },} = useForm();

  const [Entradas, setEntradas] = useState([])

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([ //llamar a la función, llamar al array con el [], y empujar la data
      ...Entradas,
      data
    ])
    e.target.reset();
  };

  return (
    <Fragment>
      <h1>Ejemplo #1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" autoComplete="off"
          name="titulo"
          placeholder="Ingrese título"
          {...register("titulo", {
            required: {
              value: true,
              message: "Campo obligatorio",
            },
            minLength: {
              value: 2,
              message: "Mínimo 2 letras",
            },
          })}
        />

        {errors.titulo && ( //si esto no está definido entonces se va a marcar todo lo que está en el span
          <span className="text-danger text-small d-block mb-2">
            {errors.titulo.message}
          </span>
        )}

        <input type="text" autoComplete="off"
          name="descripcion"
          placeholder="Ingrese descripción"
          {...register("descripcion", {
            required: {
              value: true,
              message: "Campo obligatorio",
            },
          })}
        />

        {errors.descripcion && ( //si esto no está definido entonces se va a marcar todo lo que está en el span
          <span className="text-danger text-small d-block mb-2">
            {errors.descripcion.message}
          </span>
        )}

        <button className="btn btn-primary">Agregar</button>
      </form>
      <ul className="mt-2">
                {
                    Entradas.map((item, index) =>
                        <li key={index}>
                            {item.titulo} - {item.descripcion}
                        </li>
                    )
                }
            </ul>
    </Fragment>
  );
};

export default EjemploUno;

/*
 Ejercicio 3: Formulario controlado
Instrucciones: Implementa un formulario controlado que capture los datos de un usuario (nombre, correo) y los muestre en tiempo real debajo del formulario.

Puntos clave a evaluar: manejo de formularios controlados, actualización de estado en tiempo real.
*/
import { useState } from 'react'
import '../styles/FormControl.css'

export const FormControl = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    // Manejar el envío del formulario
    const handleSubmit = (e)=>{
       e.preventDefault()

    }
     
    // Manejar cambios en el input del nombre
    const handleNameChange = (e)=>{
        setName(e.target.value)
    }

    // Manejar cambios en el input del correo electrónico
    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }



  return (
    <div className='form-container'>
    {/* <h1>Formulario Controlado</h1> */}

    <form  onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
         type="text"
         value={name}
          placeholder="Ingrese su Nombre"
          onChange={handleNameChange}
          />
        <label>Correo</label>
        <input
         type="email"
         value={email}
          placeholder="Ingrese su email"
          onChange={handleEmailChange}
          />

        <button>Enviar</button>
    </form>
    <span> {name} {email}</span>
    </div>
  )
}

import { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Teléfono"
      />
      <p>Nombre: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Teléfono: {formData.phone}</p>
    </form>
  );
}

export default Formulario;


